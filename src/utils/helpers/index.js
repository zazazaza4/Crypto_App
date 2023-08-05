export function formatNumber(number) {
  if (typeof number == "string") {
    number = +number;
  }
  const exponent = number.toExponential().split("e")[1];
  if (exponent < 0) {
    const numberFixed = -exponent + 4;
    number = number.toFixed(numberFixed);
  }

  number = String(number);

  const parts = number.split(".");

  if (parts.length !== 2) {
    return number;
  }

  const integerPart = parts[0];
  let decimalPart = parts[1];

  if (decimalPart.length > 2) {
    decimalPart =
      decimalPart.slice(0, 2) + "..." + decimalPart.replaceAll(/000/g, "");
  }

  return integerPart + "." + decimalPart;
}
