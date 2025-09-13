import { ITransaction } from "@/shared/interfaces/Transaction";
import { isAfter, isBefore, isWithinInterval } from "date-fns";

export function filterTransactions(
  transactions: ITransaction[],
  startDate: Date | null | undefined,
  endDate: Date | null | undefined
): ITransaction[] {
  return transactions.filter(({ transaction_date }) => {
    const date = new Date(transaction_date);

    if (startDate && !endDate) {
      return isAfter(date, startDate) || date.getTime() === startDate.getTime();
    }

    if (!startDate && endDate) {
      return isBefore(date, endDate) || date.getTime() === endDate.getTime();
    }

    if (startDate && endDate) {
      return isWithinInterval(date, { start: startDate, end: endDate });
    }

    return true;
  });
};

export default filterTransactions;
