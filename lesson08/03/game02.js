'use strict';

const isNumber = function (n) {
	if (isNaN(parseFloat(n))) {
		alert('Введите число');
		return false;
	} else return true;
};

const isOver = (num, retry) => {
	if (num === null) {
		retry();
		return true;
	} else return false;
};

const getNums = (n, validate, retry, end) => {
	const arr = [];
	for (let i = 0; i < 2; i++) {
		n = prompt(`Введите число №${i + 1}`);
		if (end(n, retry)) {
			return false;
			break;
		} else if (!validate(n)) {
			return getNums(n, validate, retry, end);
			break;
		} else {
			arr.push(n);
		}
	}
	return arr;
};

const generateHiddenNumber = (min, max) => {
	return (
		Math.floor(Math.random() * (Math.max(min, max) - Math.min(min, max) + 1)) +
		Math.min(min, max)
	);
};

const getNumber = (count, min, max) => {
	return prompt(
		`Угадай число от ${min} до ${max} (Осталось попыток: ${count})`
	);
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
	let currentNumber, endGame;
	const history = [];
	const array = getNums(currentNumber, isNumber, isRetry, isOver);

	if (!array) {
		return false;
	}
	const min = Math.min(...array);
	const max = Math.max(...array);
	let count = Math.floor((max - min) * 0.3);
	const hiddenNumber = generateHiddenNumber(min, max);

	console.log('hiddenNumber = ' + hiddenNumber);

	st: while (count > 0 && !endGame) {
		currentNumber = getNumber(count, min, max);
		endGame = isOver(currentNumber, isRetry);

		if (endGame) {
			break;
		}
		if (!isNumber(currentNumber)) {
			continue st;
		}
		if (!history.includes(currentNumber)) {
			history.push(currentNumber);
			count--;
			console.log(history);
		} else {
			alert('Вы уже вводили это число');
			continue st;
		}

		if (!checkNumber(currentNumber, hiddenNumber)) {
			break st;
		}
	}
	if (count < 1) {
		alert('Попытки закончились!');
		isRetry();
	}
};

start();
