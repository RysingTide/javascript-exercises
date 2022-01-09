const leapYears = function(year) {
  const isLeapYear = (year) => {
    if (year % 4 !== 0) {
      return false;
    } else if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }

  if(isLeapYear(year)) {
    return true;
  }
};

// Do not edit below this line
module.exports = leapYears;
