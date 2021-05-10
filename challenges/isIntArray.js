// 
function isIntArray(arr) {
  if(!Array.isArray(arr)){
    return false;
  }

  if(arr.length === 0) {
    return true;
  }
  for(let i = 0; i < arr.length; i++){
    if (arr[i] % arr[i] !== 0){
      return false;
    }
  }
  
  return true;
};

module.exports = isIntArray;