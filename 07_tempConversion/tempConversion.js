const ftoc = function(fahrenheit) {
  celcius = (fahrenheit - 32) * (5/9);
  if (celcius % 1 !== 0) {
    return celcius.toFixed(1);
  } else {
    return celcius;
  }
};

const ctof = function(celcius) {
  fahrenheit = (celcius * 9/5) + 32;
  if (fahrenheit % 1 !== 0) {
    return fahrenheit.toFixed(1);
  }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
