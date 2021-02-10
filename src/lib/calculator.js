export function sum(x, y) {
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    throw new Error("Please check your inputs");
  }
  return x + y;
}
