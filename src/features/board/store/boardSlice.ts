import { createSlice } from "@reduxjs/toolkit";
import { IAccount } from "@/shared/interfaces/Account"
import { ITransaction } from "@/shared/interfaces/Transaction";
import { ReduxStatus } from "@/shared/enums/reduxStatusEnum";
import { IBankCard } from "../interfaces/BankCard";

type BoardState = {
  accounts: IAccount[];
  bankCards: IBankCard[];
  transactions: ITransaction[];
  transactionsStatus: ReduxStatus;
};

const initialState: BoardState = {
  accounts: [],
  bankCards: [],
  transactions: [],
  transactionsStatus: ReduxStatus.idle,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    resetBoardSlice: () => initialState,
  }
});


export const {
  resetBoardSlice
} = boardSlice.actions;

export default boardSlice;
