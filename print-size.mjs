// Inches × pixels per inch gives pixels along that edge.
export function printPixels(width, height, ppi = 300) {
  if (![width, height, ppi].every(n => Number.isFinite(n) && n > 0)) {
    throw new RangeError("Enter positive numbers for both dimensions and PPI.");
  }
  return [Math.ceil(width * ppi), Math.ceil(height * ppi)];
}
