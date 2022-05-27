const ftoc = function(degree) {
  let result = parseFloat(((degree-32)*0.5556));
  return Math.round(result * 10) / 10;
};

const ctof = function(degree) {
  let result = parseFloat(((degree*9)/5)+32);
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
