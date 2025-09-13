import { generateAccountsMock } from "@/shared/mocks/generateAccountsMock";
import { generateMyTransactionsMock } from "@/shared/mocks/generateMyTransactionsMock";
import { generateRecentTransactionsMock } from "@/shared/mocks/generateRecentTransactionsMock";
import { getAccountByNumberRequest, getAccountTransactionsByNumberRequest } from "@/shared/services/api/accounts/accountsService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserAccount = createAsyncThunk('account/getUserAccount', async (accountNumber: number) => {
  const { data } = await getAccountByNumberRequest(accountNumber);

  return data;
});

export const getAccountsMock = createAsyncThunk('account/getAccountsMock', async (accountNumber: number) => {
  const { data } = await getAccountByNumberRequest(accountNumber);

  // Generar mock de cuentas del usuario
  const accounts = generateAccountsMock(data);
  return accounts;
});

export const getAccountTransactions = createAsyncThunk('account/getAccountTransactions', async (accountNumber: number) => {
  const { data } = await getAccountTransactionsByNumberRequest(accountNumber);

  return data;
});

export const getRecentTransactions = createAsyncThunk('account/getRecentTransactions', async (accountNumber: number) => {
  const { data } = await getAccountTransactionsByNumberRequest(accountNumber);
  
  const mockRecentTransactions = generateRecentTransactionsMock(data.items);
  return mockRecentTransactions;
});

export const getMyTransactions = createAsyncThunk('account/getMyTransactions', async (accountNumber: number) => {
  const { data } = await getAccountTransactionsByNumberRequest(accountNumber);
  
  const mockMyTransactions = generateMyTransactionsMock(data.items);
  return mockMyTransactions;
});
