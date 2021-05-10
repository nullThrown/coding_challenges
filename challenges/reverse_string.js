function reverseString(str) {
  let reversedStr = '';
  
  for(let i = str.length -1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  console.log(reversedStr);
  return reversedStr;
}

module.exports = reverseString;
