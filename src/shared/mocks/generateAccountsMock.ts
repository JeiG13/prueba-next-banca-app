import { IAccount } from "../interfaces/Account";

export const generateAccountsMock = (account: IAccount): IAccount[] => {
  return [
    {
      ...account,
      id: 1,
      country_code: 'NIC',
    },
    {
      ...account,
      id: 2,
      currency: 'USD',
      country_code: 'USA',
    },
    {
      ...account,
      id: 3,
      currency: 'USD',
      country_code: 'USA',
    },
  ];
};
