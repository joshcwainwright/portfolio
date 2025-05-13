export interface Fraction {
  numerator: number;
  denominator: number;
}

export default function decimalToFraction(decimal: number): Fraction {
  if (Number.isInteger(decimal)) {
    return { numerator: decimal, denominator: 1 } as Fraction;
  }

  const tolerance = 1.0e-10;
  let h1 = 1,
    h2 = 0;
  let k1 = 0,
    k2 = 1;
  let b = decimal;

  do {
    const a = Math.floor(b);
    const h = a * h1 + h2;
    const k = a * k1 + k2;

    h2 = h1;
    h1 = h;
    k2 = k1;
    k1 = k;

    b = 1 / (b - a);
  } while (Math.abs(decimal - h1 / k1) > tolerance);

  return { numerator: h1, denominator: k1 } as Fraction;
}
