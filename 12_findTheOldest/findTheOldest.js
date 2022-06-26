const findTheOldest = function (people) {
  const findTheOldest = people.map((a) => {
    const today = new Date();
    let ages;
    let currYear = a.hasOwnProperty("yearOfDeath");

    currYear
      ? (ages = a.yearOfDeath - a.yearOfBirth)
      : (ages = today.getFullYear() - a.yearOfBirth);

    return ages;
  });

  let max = Math.max(...findTheOldest);

  return people[findTheOldest.indexOf(max)];
};

// Do not edit below this line
module.exports = findTheOldest;
