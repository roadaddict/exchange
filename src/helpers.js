export const ifValue = event =>
  (event.which >= 48 && event.which <= 57) ||
  ((event.charCode === 46 || event.charCode === 44) &&
    event.target.value.indexOf(".") === -1)
    ? true
    : false;

export const Convert = (value, fromRate, toRate) =>
  fromRate && toRate && parseFloat(value)
    ? ((parseFloat(value) * toRate) / fromRate).toFixed(2)
    : "0.00";

export const currencyValue = (fromVal, toVal, toFixed = 4) =>
  ((1 / fromVal) * toVal).toFixed(toFixed);

export const currencyChar = char => {
  const currencyCodeChars = {
    GBP: "£",
    EUR: "€",
    USD: "$"
  };

  return currencyCodeChars[char] ? currencyCodeChars[char] : char;
};

export const Validation = value => {
  value = value.replace(/,/, ".");
  if (value.length === 0) return "0";

  let valueInt = parseInt(value, 10);
  valueInt = Number.isNaN(valueInt) ? 0 : valueInt;
  valueInt = Math.abs(valueInt);
  let ext = value.indexOf(".") > -1 ? `.${value.split(".")[1]}` : null;
  ext = ext && ext.length > 3 ? ext.slice(0, 3) : ext;

  return valueInt + ext;
};
