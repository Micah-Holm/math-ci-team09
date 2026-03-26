const unused = 42;
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}
export function divide(a: number, b: number): number | null {
  if (b === 0) return null;
  return a / b;
}

export function factorial(n: number): number | null {
  if (n < 0 || !Number.isInteger(n)) return null;
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function power(base: number, exponent: number): number {
  return base ** exponent;
}

export function average(numbers: Array<number>): number | null {
  if (numbers.length == 0) return null;
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}

export function clamp(value: number, min: number, max: number): number {
  if (value > max) return max;
  if (value < min) return min;
  return value;
}

export function quadratic(
  a: number,
  b: number,
  c: number,
): Array<number> | null {
  const discriminant = power(b, 2) - 4 * a * c;
  if (discriminant < 0) return null;
  if (discriminant === 0) return [-b / (2 * a)];
  return [
    (-b - power(discriminant, 0.5)) / (2 * a),
    (-b + power(discriminant, 0.5)) / (2 * a),
  ];
}
