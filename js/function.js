
// ПЕРВАЯ ФУНКЦИЯ
const checkPalindrome = function (str) {
  str = str.toLowerCase().replaceAll(' ', '');
  let strReverse = '';
  for (let i = str.length - 1; i >= 0; i = i - 1) {
    strReverse += str[i];
  }
  return str === strReverse;
};
checkPalindrome();
// ВТОРАЯ ФУНКЦИЯ
const getNumber = function (content) {
  const str = String(content);
  let num = '';
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      num += str[i];
    }
  }
  return parseInt(num, 10);
};
getNumber();

// ТРЕТЬЯ ФУНКЦИЯ
const returnString = function (str, range, add) {
  if (str.length >= range) {
    return str;
  }
  let neededLength = range - str.length;
  let unitedString = '';
  while (unitedString.length < neededLength) {
    if (neededLength.length - unitedString.length >= add.length) {
      unitedString = add + unitedString;
    } else {
      unitedString = add.slice(0, neededLength - unitedString.length) + unitedString;
    }
  }
  return unitedString + str;
};

// ЧЕТВЕРТАЯ ФУНКЦИЯ
const checkLength = function (str, num) {
  return str.length <= num;
};

