function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

const multiplyNumbersArrow = (a: number, b: number): number => a * b;

console.log(multiplyNumbersArrow(5, 3));
console.log(multiplyNumbers(5, 3));