const sumAll = function(num1, num2) {
  let arr = [num1, num2];
  let fullArr = [];
  let sum = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const isRealNum = (n) => {
    return n === Number(n);
  }

  arr.sort((a, b) => {return a - b});

  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
  }

  sum = fullArr.reduce(reducer, 0);

  if (!isRealNum(num1) || !isRealNum(num2)) {
    return 'ERROR';
  } else if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  } else {
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
