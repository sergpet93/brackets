module.exports = function check(str, bracketsConfig) {
  while(str.length > 0){
    let checkBracket = false
    for (let bracket of bracketsConfig){
      let reg = `${bracket[0]}${bracket[1]}`;
      if (str.indexOf(reg) !== -1){
        str = str.replace(reg, '');
        checkBracket = true
      }
    }
    if (checkBracket === false) break
  } 
  return str.length > 0 ? false : true 
}
