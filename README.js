# telephoneNumValidator
function telephoneCheck(str) {
  if (str.indexOf("(") === -1 && str.indexOf(")") > -1) {
    return false;
  }

  if (str[0] === "-") return false;

  if (str.indexOf(")") - str.indexOf("(") >= 5) {
    return false;
  }

  let formattedNum = str.replace(/-| /g, "");

  if (formattedNum.indexOf("(") < formattedNum.indexOf(")")) {
    formattedNum = formattedNum.replace(/\(|\)/g, "");
  }

  if (formattedNum.length === 10) {
    return true;
  } else if (formattedNum.length === 11 && formattedNum[0] === "1") {
    return true;
  } 

  return false;
}
