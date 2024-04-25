export default async function formatNumber(number) {
  const formats = [
    { limit: 1000, multiplier: 1, unit: "" },
    { limit: 1000000, multiplier: 1000, unit: "K" },
    { limit: 1000000000, multiplier: 1000000, unit: "M" },
    { limit: Infinity, multiplier: 1000000000, unit: "B" },
  ];

  const { multiplier, unit } = formats.find(({ limit }) => number < limit);
  const result =
    (number / multiplier).toFixed(
      number < 1000 ? 0 : number / (multiplier + multiplier / 10) >= 1 ? 1 : 0
    ) + unit;

  return result;
}

/**
 * number < 1000: return number
 * number >= 1000 && number < 1000000: result = number / 1000
 *  * return result.toFixed(1) + 'K' if result > 1 else result.toFixed(0) + 'K'
 * number >= 1000000 && number < 1000000000: result = number / 1000000
 *  * return result.toFixed(1) + 'M' if result > 1 else result.toFixed(0) + 'M'
 * number >= 1000000000: result = number / 1000000000
 *  * return result.toFixed(1) + 'B' if result > 1 else result.toFixed(0) + 'B'
 */
