import { IAccount } from "../interfaces/Account";

export const generateAccountsMock = (account: IAccount): IAccount[] => {
  return [
    {
      ...account,
      id: 1,
      account_number: 10424667,
      balance: 38456,
      country_code: 'NIC',
    },
    {
      ...account,
      id: 2,
      account_number: 10239849,
      currency: 'USD',
      balance: 22380,
      country_code: 'USA',
    },
    {
      ...account,
      id: 3,
      account_number: 10635657,
      currency: 'USD',
      balance: 12400,
      country_code: 'USA',
    },
  ];
};
