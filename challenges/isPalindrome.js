function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');

  if(str === reversedStr) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;

