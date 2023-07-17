const convertToCelsius = function(celsiusNumber) {
  if (!Number.isInteger(celsiusNumber)) return "ERROR";
  let cel = (celsiusNumber *(9/5)) +32;
  return cel; 
};
const result = convertToCelsius(0)
console.log(result.toFixed(1));

const convertToFahrenheit = function(fahrenheitNumber) {
  if (!Number.isInteger(fahrenheitNumber)) return "ERROR";
  let fah = (fahrenheitNumber - 32) * (5/9);
  return fah; 
};
const result2 = convertToFahrenheit(32)
console.log(result2.toFixed(1));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
