const palindromes = function (word) {
    length = word.length; 
    for (let i = 0; i < length/2; i++) {
      if (word.charAt(i) !== word.charAt(length - 1 - i)) {
        return false;
      }
    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
