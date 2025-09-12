import { IAmount } from "./Amount";

export interface ICreateTransaction {
  origin: string;
  destination: string;
  amount: IAmount;
}
