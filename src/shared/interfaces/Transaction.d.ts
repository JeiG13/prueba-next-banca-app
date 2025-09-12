import { IAmount } from "./Amount";

export interface ITransaction {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: string;
  amount: IAmount;
  origin: string;
  destination: string;
  transaction_date: string;
}
