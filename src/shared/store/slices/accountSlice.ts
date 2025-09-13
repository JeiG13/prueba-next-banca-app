import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import { ReduxStatus } from "@/shared/enums/reduxStatusEnum";
import { IAccount } from "@/shared/interfaces/Account"
import { ITransaction } from "@/shared/interfaces/Transaction";
import { getAccountsMock, getAccountTransactions, getMyTransactions, getRecentTransactions, getUserAccount } from "../thunks/accountThunk";

type AccountState = {
  account: IAccount | undefined;
  accountStatus: ReduxStatus;
  accountsMock: IAccount[];
  accountsMockStatus: ReduxStatus;
  accountTransactions: ITransaction[];
  accountTransactionsStatus: ReduxStatus;
  accountRecentTransactions: ITransaction[];
  accountRecentTransactionsStatus: ReduxStatus;
  myTransactions: ITransaction[];
  myTransactionsStatus: ReduxStatus;
};

const initialState: AccountState = {
  account: undefined,
  accountStatus: ReduxStatus.idle,
  accountsMock: [],
  accountsMockStatus: ReduxStatus.idle,
  accountTransactions: [],
  accountTransactionsStatus: ReduxStatus.idle,
  accountRecentTransactions: [],
  accountRecentTransactionsStatus: ReduxStatus.idle,
  myTransactions: [],
  myTransactionsStatus: ReduxStatus.idle,
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

    builder.addCase(getRecentTransactions.pending, (state) => {
      state.accountRecentTransactionsStatus = ReduxStatus.pending;
    });
    builder.addCase(getRecentTransactions.rejected, (state) => {
      state.accountRecentTransactionsStatus = ReduxStatus.failed;
      state.accountRecentTransactions = initialState.accountRecentTransactions;
      toast.error('Ha ocurrido un error al obtener las transacciones recientes');
    });
    builder.addCase(getRecentTransactions.fulfilled, (state, action) => {
      state.accountRecentTransactionsStatus = ReduxStatus.failed;
      state.accountRecentTransactions = action.payload;
      toast.success('La transacciones recientes se han obtenido con éxito');
    });

    builder.addCase(getMyTransactions.pending, (state) => {
      state.myTransactionsStatus = ReduxStatus.pending;
    });
    builder.addCase(getMyTransactions.rejected, (state) => {
      state.myTransactionsStatus = ReduxStatus.failed;
      state.myTransactions = initialState.myTransactions;
      toast.error('Ha ocurrido un error al obtener mis transacciones');
    });
    builder.addCase(getMyTransactions.fulfilled, (state, action) => {
      state.myTransactionsStatus = ReduxStatus.failed;
      state.myTransactions = action.payload;
      toast.success('Mis transacciones se han obtenido con éxito');
    });
  }
});

export const {
  resetAccountSlice,
} = accountSlice.actions;

export default accountSlice;
