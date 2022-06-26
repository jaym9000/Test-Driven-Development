const findTheOldest = function (people) {
  const findTheOldest = people.map((a) => {
    let ages = a.yearOfDeath - a.yearOfBirth;
    return ages;
  });

  let max = Math.max(...findTheOldest);

  return people[findTheOldest.indexOf(max)];
};

// Do not edit below this line
module.exports = findTheOldest;
