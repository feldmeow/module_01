'use strict';

const isNumber = function (n) {
	return !isNaN(parseFloat(n));
};

const generateHiddenNumber = () => {
	const hiddenNum = Math.floor(Math.random() * 100);
	console.log(hiddenNum);
	return hiddenNum;
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
		start();
	} else {
		alert('До свидания!');
	}
};

const start = () => {
	let count = 10;
	let currentNumber;
	const hiddenNumber = generateHiddenNumber();
	st: while (count > 0) {
		currentNumber = getNumber(count);
		count--;
		if (currentNumber === null) {
			isRetry();
			break st;
		} else if (!isNumber(currentNumber)) {
			alert('Введи число!');
			continue st;
		} else {
			if (!checkNumber(currentNumber, hiddenNumber)) {
				isRetry();
				break st;
			}
		}
	}
	if (count < 1) {
		alert('Попытки закончились!');
		isRetry();
	}
};

start();
