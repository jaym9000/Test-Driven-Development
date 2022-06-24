const palindromes = function (str) {
  const cut = [...str].reverse().join("");
  return (
    cut.toLowerCase().replace(/\W/g, "") ===
    str.toLowerCase().replace(/\W/g, "")
  );
};

// Do not edit below this line
module.exports = palindromes;
