const removeFromArray = function(arr, ...vals) {
  let paramVal;
  let arrVal;

  for (const val of vals) {
    index = vals.indexOf(val)
    paramVal = vals[index];

    for (let i = arr.length - 1; i >= 0; i--) {
      arrVal = arr[i]

      if (paramVal === arrVal) {
        arr.splice(arr.indexOf(arrVal), 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
