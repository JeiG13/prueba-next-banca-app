export type CurrencyCode = 'NIO' | 'USD' | 'EUR' | 'GBP';

type Currency = {
	code: CurrencyCode;
	name: string;
	symbol: string;
};

export const currencies: Currency[] = [
	{
		code: 'NIO',
		name: 'Córdobas',
		symbol: 'C$'
	},
	{
		code: 'USD',
		name: 'Dólares',
		symbol: '$'
	},
	{
		code: 'EUR',
		name: 'Euro',
		symbol: '€'
	},
	{
		code: 'GBP',
		name: 'Libras',
		symbol: '£'
	},
];

export const getCurrencyByCode = (code: CurrencyCode): Currency | undefined =>
	currencies.find((currency) => currency.code === code);