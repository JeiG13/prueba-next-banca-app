import { IAccount } from "@/shared/interfaces/Account";
import { createApiInstance } from "../../createApiInstance";
import { IPageResult } from "@/shared/interfaces/PageResult";
import { ITransaction } from "@/shared/interfaces/Transaction";

const accountsInstance = createApiInstance({
  baseURL: 'accounts',
});

export const getAccountByNumberRequest = (accountNumber: number) => accountsInstance
  .get<IAccount>(`${accountNumber}`);

export const getAccountTransactionsByNumberRequest = (accountNumber: number) => accountsInstance
  .get<IPageResult<ITransaction>>(`${accountNumber}/transactions`);
