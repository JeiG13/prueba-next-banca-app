import { CurrencyCode } from "../helpers/getCurrencyByCode";
export interface IAccount {
  id?: number,
  alias: string;
  account_number: number;
  balance: number;
  currency: CurrencyCode;
  country_code?: string;
}
