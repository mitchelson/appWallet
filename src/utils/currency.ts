import currencyLib from 'currency.js';

export const currency = (value: number, type: string) => {
  let textCurrency = currencyLib(value, {
    symbol: 'R$ ',
    decimal: ',',
    separator: '.',
    fromCents: true,
  }).format();
  if (type === 'income') {
    textCurrency = `+${textCurrency}`;
  }else{
    textCurrency = `-${textCurrency}`;
  }
  return textCurrency;
}