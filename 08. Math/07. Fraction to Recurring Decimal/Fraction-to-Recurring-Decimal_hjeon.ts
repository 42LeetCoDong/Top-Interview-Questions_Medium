function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) return "0";

  let s: string = "";
  if (Math.sign(numerator) !== Math.sign(denominator)) s += "-";

  let n = Math.abs(numerator);
  const d = Math.abs(denominator);

  s += Math.floor(n / d).toString();
  n %= d;

  if (n === 0) return s;

  s += ".";

  const map = new Map();

  while (n !== 0) {
    map.set(n, s.length);

    n *= 10;
    s += Math.floor(n / d).toString();
    n %= d;

    const i = map.get(n); 
    if (i != null) return `${s.slice(0, i)}(${s.slice(i)})`;
  }

  return s;
}
