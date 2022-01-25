const findTheOldest = function(arr) {
  const today = new Date();
  const year = today.getFullYear();
  arr.map(person => {
    if (!person.yearOfDeath) {
      return person['age'] = year - person.yearOfBirth;
    } else {
      return person['age'] = person.yearOfDeath - person.yearOfBirth;
    }
  })
  const sorted = arr.sort((a, b) => a.age < b.age ? 1 : -1);
  sorted.splice(1);
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
