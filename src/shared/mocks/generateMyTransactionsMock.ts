import { ITransaction } from "../interfaces/Transaction";

export function generateMyTransactionsMock(transactions: ITransaction[]): ITransaction[] {
  const [baseTransaction] = transactions;

  const startDate = new Date(2025, 8, 12); 

  return Array.from({ length: 12 }, (_, i) => {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() - i);

    return {
      ...baseTransaction,
      balance: 2100,
      transaction_number: (100000 + i).toString(),
      transaction_date: date.toISOString(),
    };
  });
}