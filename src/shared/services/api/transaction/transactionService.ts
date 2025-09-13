import { ICreateTransaction } from "@/shared/interfaces/CreateTransaction";
import { createApiInstance } from "../../createApiInstance";

const transactionInstance = createApiInstance({
  baseURL: 'transactions',
});

export const createTransactionRequest = (transaction: ICreateTransaction) => transactionInstance
  .post('', transaction);
