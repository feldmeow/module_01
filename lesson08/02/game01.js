'use strict';

const isNumber = function (n) {
	if (isNaN(parseFloat(n))) {
		return false;
	} else return true;
};

const isOver = (num, retry) => {
	if (num === null) {
		retry();
		return true;
	} else return false;
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
	let currentNumber, endGame;
	const hiddenNumber = generateHiddenNumber();
	st: do {
		currentNumber = getNumber(count);
		count--;
		endGame = isOver(currentNumber, isRetry);
		if (endGame) {
			break;
		}
		if (!isNumber(currentNumber)) {
			alert('Введите число');
			continue st;
		}
		if (!checkNumber(currentNumber, hiddenNumber)) {
			isRetry();
			break st;
		}
	} while (count > 0 && !endGame);
	if (count < 1) {
		alert('Попытки закончились!');
		isRetry();
	}
};

start();
