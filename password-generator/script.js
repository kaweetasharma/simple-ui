const getLowerCase = () => {
  const random = Math.floor(Math.random() * 26 + 97);
  return String.fromCharCode(random);
};
const getUpperCase = () => {
  const random = Math.floor(Math.random() * 26 + 65);
  return String.fromCharCode(random);
};
const getNumber = () => {
  const random = Math.floor(Math.random() * 10 + 48);
  return String.fromCharCode(random);
};

const getSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return '';
  }
  for (let i = 0; i < length; i++) {
    const funcName = Object.keys(
      typesArr[Math.floor(Math.random() * typesCount)]
    )[0];

    generatedPassword += randomFunc[funcName]();
  }
  return generatedPassword;
};
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const randomFunc = {
  lower: getLowerCase,
  upper: getUpperCase,
  number: getNumber,
  symbol: getSymbol,
};
clipboardEl.addEventListener('click', () => {
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password is copied to clipboard');
});
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasSymbol = symbolsEl.checked;
  const hasNumber = numbersEl.checked;
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});
