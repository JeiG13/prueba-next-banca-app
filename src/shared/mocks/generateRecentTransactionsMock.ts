import { ITransaction } from "../interfaces/Transaction";

export const generateRecentTransactionsMock = (transactions: ITransaction[]): ITransaction[] => {
  const [transaction] = transactions;
  return Array(3).fill(null).map(() => ({
    ...transaction,
    balance: 2100,
  }));
};
