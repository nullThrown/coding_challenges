function hasRobotReturn(str) {
  let xPlane = 0;
  let yPlane = 0;

  for(let i = 0; i < str.length; i++){
    switch(str.charAt(i)) {
          
      case 'L':
         xPlane++;
        break;
      case 'R':
         xPlane--;
        break;
      case 'U':
        yPlane++;
        break;
      case 'D':
        yPlane--;
        break;          
    }
  };

  return xPlane === 0 && yPlane === 0 ? true : false;
} 

module.exports = hasRobotReturn;