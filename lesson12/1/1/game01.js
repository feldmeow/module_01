'use strict';

let count = 0;
let hiddenNumber;
let currentNumber;
const isNumber = function (n) {
  return !isNaN(parseFloat(n));
};

const reload = () => {
  count = 10;
};
const generateHiddenNumber = () => {
  hiddenNumber = Math.floor(Math.random() * 100);
  console.log(hiddenNumber);
};

const getNumber = (count) => {
  return prompt(`Угадай число от 1 до 100 (Осталось попыток: ${count})`);
};

const checkNumber = (num, hNum) => {
  num = Number(num);
  if (num === hNum) {
    alert('Вы угадали!');
    return false;
  } else if (num > hNum) {
    alert('Загаданное число меньше');
    return true;
  } else if (num < hNum) {
    alert('Загаданное число больше');
    return true;
  }
};

const isRetry = () => {
  if (confirm('Хотите сыграть ещё?')) {
    generateHiddenNumber();
    reload();
    start();
  } else {
    alert('До свидания!');
    return false;
  }
};

const start = () => {
  currentNumber = getNumber(count);
  count -= 1;
  if (currentNumber === null) {
    isRetry();
    return false;
  }
  if (!isNumber(currentNumber)) {
    alert('Введите число!');
    start();
  }
  if (checkNumber(currentNumber, hiddenNumber)) {
    start();
  } else {
    isRetry();
    return false;
  }

  if (count < 1) {
    alert('Попытки закончились!');
    isRetry();
    return false;
  }
};

reload();
generateHiddenNumber();
start();
