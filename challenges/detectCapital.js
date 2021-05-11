
function detectCapital(str) {
  let capCount = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toUpperCase()) {
      capCount++;
    }
  }

  if(capCount === str.length || capCount === 0 || capCount === 1 && str[0] === str[0].toUpperCase()) {
    return true;
  }
  return false;
}



module.exports = detectCapital;
// Given a string, return whether or not it uses capitalization correctly. 
// A string correctly uses capitalization:
  // if all letters are capitalized,
  // no letters are capitalized,
  // or only the first letter is capitalized.
