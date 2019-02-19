module.exports = function check(str, bracketsConfig) {
  // your solution
  if(str.length%2 !=0){
    return false;
  };
  if(str.length==0){
    return false;      
  }
  let stack = [];
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){
      var last = stack[stack.length-1];
           
      if(str[i]==bracketsConfig[j][1] && stack.length != 0 && last == bracketsConfig[j][0]){
        stack.pop(); 
      }
      else if (str[i] == bracketsConfig[j][0]){
       
        stack.push(str[i]);
      }
    }
  
  } 
  
  return stack.length ? false : true;
};
