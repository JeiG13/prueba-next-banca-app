import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import { ReduxStatus } from "@/shared/enums/reduxStatusEnum";
import { IAccount } from "@/shared/interfaces/Account"
import { ITransaction } from "@/shared/interfaces/Transaction";
import { getAccountsMock, getAccountTransactions, getUserAccount } from "../thunks/accountThunk";

type AccountState = {
  account: IAccount | undefined;
  accountStatus: ReduxStatus;
  accountsMock: IAccount[];
  accountsMockStatus: ReduxStatus;
  accountTransactions: ITransaction[];
  accountTransactionsStatus: ReduxStatus;
};

const initialState: AccountState = {
  account: undefined,
  accountStatus: ReduxStatus.idle,
  accountsMock: [],
  accountsMockStatus: ReduxStatus.idle,
  accountTransactions: [],
  accountTransactionsStatus: ReduxStatus.idle,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    resetAccountSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAccount.pending, (state) => {
      state.accountStatus = ReduxStatus.pending;
    });
    builder.addCase(getUserAccount.rejected, (state) => {
      state.accountStatus = ReduxStatus.failed;
      state.account = initialState.account;
      toast.error('Ha ocurrido un error al obtener tu cuenta');
    });
    builder.addCase(getUserAccount.fulfilled, (state) => {
      state.accountStatus = ReduxStatus.failed;
      state.account = initialState.account;
      toast.error('La cuenta se ha obtenido con éxito');
    });

    builder.addCase(getAccountsMock.pending, (state) => {
      state.accountsMockStatus = ReduxStatus.pending;
    });
    builder.addCase(getAccountsMock.rejected, (state) => {
      state.accountsMockStatus = ReduxStatus.failed;
      state.accountsMock = initialState.accountsMock;
      toast.error('Ha ocurrido un error al obtener tus cuentas');
    });
    builder.addCase(getAccountsMock.fulfilled, (state, action) => {
      state.accountsMockStatus = ReduxStatus.failed;
      state.accountsMock = action.payload;
      toast.success('La cuentas se han obtenido con éxito');
    });

    builder.addCase(getAccountTransactions.pending, (state) => {
      state.accountTransactionsStatus = ReduxStatus.pending;
    });
    builder.addCase(getAccountTransactions.rejected, (state) => {
      state.accountTransactionsStatus = ReduxStatus.failed;
      state.accountTransactions = initialState.accountTransactions;
      toast.error('Ha ocurrido un error al obtener tus cuentas');
    });
    builder.addCase(getAccountTransactions.fulfilled, (state, action) => {
      state.accountTransactionsStatus = ReduxStatus.failed;
      state.accountTransactions = action.payload.items;
      toast.success('La cuentas se han obtenido con éxito');
    });
  }
});

export const {
  resetAccountSlice,
} = accountSlice.actions;

export default accountSlice;
