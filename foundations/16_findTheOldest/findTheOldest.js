const findTheOldest = function(people) {
    const currYear = (new Date().getFullYear());
    const descArr = people.sort((x, y) => {
        const xAge = x.yearOfDeath ? x.yearOfDeath - x.yearOfBirth : currYear - x.yearOfBirth; 
        const yAge = y.yearOfDeath ? y.yearOfDeath - y.yearOfBirth : currYear - y.yearOfBirth;
        return yAge - xAge;
    });
    return descArr[0];
    };

// Do not edit below this line
module.exports = findTheOldest;
