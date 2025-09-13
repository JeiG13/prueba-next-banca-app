import { IAmount } from "./Amount";

export interface IPostTransaction {
  origin: string;
  destination: string;
  amount: IAmount;
};
