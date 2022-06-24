const add = function (first, second) {
  return first + second;
};

const subtract = function (first, second) {
  return first - second;
};

const sum = function ([...sums]) {
  return sums.reduce((a, b) => a + b, 0);
};

const multiply = function ([...sums]) {
  return sums.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
