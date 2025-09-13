import { ReduxStatus } from "@/shared/enums/reduxStatusEnum"
import { createSlice } from "@reduxjs/toolkit";
import { postTransaction } from "../thunks/transactionThunks";
import { toast } from "react-toastify";

type TransactionSliceState = {
  postTransactionStatus: ReduxStatus;
};

const initialState: TransactionSliceState = {
  postTransactionStatus: ReduxStatus.idle,
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    resetTransactionSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(postTransaction.pending, (state) => {
      state.postTransactionStatus = ReduxStatus.pending;
    });
    builder.addCase(postTransaction.rejected, (state) => {
      state.postTransactionStatus = ReduxStatus.failed;
      toast.error('Ha ocurrido un error al crear la transacción');
    });
    builder.addCase(postTransaction.fulfilled, (state) => {
      state.postTransactionStatus = ReduxStatus.succeeded;
      toast.success('La transacción se ha creado con éxito');
    });
  },
});

export const {
  resetTransactionSlice,
} = transactionSlice.actions;

export default transactionSlice;
