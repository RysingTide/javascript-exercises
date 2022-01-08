const sumAll = function(num1, num2) {
  let arr = [num1, num2];
  let fullArr = [];
  let sum = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  arr.sort((a, b) => {return a - b});

  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
  }

  sum = fullArr.reduce(reducer);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
