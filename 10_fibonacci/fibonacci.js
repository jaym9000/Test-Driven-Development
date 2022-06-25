const fibonacci = function (n) {
  let a = 1,
    b = 0,
    temp,
    ans;

  if (n < 0) {
    return "OOPS";
  }

  while (n >= 0) {
    temp = a;
    a = a + b;
    ans = b;
    b = temp;
    n--;
  }

  return ans;
};

// Do not edit below this line
module.exports = fibonacci;
