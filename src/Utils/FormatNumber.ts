const toMoney = (value: number) => isNaN(value)
  // @ts-ignore
  ? `$--.--` : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const toPercent = (value: number, signDisplay: boolean = true) => isNaN(value)
  // @ts-ignore
  ? `---%` : new Intl.NumberFormat('en-US', { style: 'percent', signDisplay: signDisplay ? 'exceptZero' : 'never', minimumFractionDigits: 2 }).format(value)

const toCommas = (value: number, maxDecimals: number = 0) => isNaN(value)
  ? `---${maxDecimals ? '.--' : ''}` : new Intl.NumberFormat('en-US', { maximumFractionDigits: maxDecimals ? maxDecimals : 0 }).format(value);


export const FormatNumber = {
  toMoney,
  toPercent,
  toCommas
}
