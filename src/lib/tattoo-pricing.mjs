// Source: https://apextattooz.com/tattoo-price-in-delhi/, checked 4 October 2026.
// Estimates use width × height; the artist confirms complexity and final quote.
export const FIRST_SQUARE_INCH_INR = 699;
export const ADDITIONAL_RATES_INR = Object.freeze([299, 399, 499]);

export function estimateTattooPrice(width, height, additionalRate) {
  if (![width, height, additionalRate].every(Number.isFinite)
      || width <= 0 || height <= 0
      || !ADDITIONAL_RATES_INR.includes(additionalRate)) {
    return null;
  }

  const area = width * height;
  const additionalArea = Math.max(0, area - 1);
  const totalInr = Math.round((FIRST_SQUARE_INCH_INR + additionalArea * additionalRate) * 100) / 100;
  if (!Number.isFinite(area) || !Number.isFinite(totalInr)) return null;
  return { width, height, area, additionalArea, additionalRate, totalInr };
}
