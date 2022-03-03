'use strict';

let intercalaryYears = [];

// запись в массив
const pushToArr = (arr, el) => {
	arr.push(el);
};

// проверка
const isLeapYear = (year) => {
	return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
};

const toNextYear = (min, max) => {
	let currYear = Math.min(min, max);
	// находим первый високосный год
	while (!isLeapYear(currYear)) {
		currYear += 1;
	}
	pushToArr(intercalaryYears, currYear);
	while (currYear < Math.max(min, max)) {
		currYear += 4;
		if (isLeapYear(currYear)) pushToArr(intercalaryYears, currYear);
	}
	return intercalaryYears;
};

console.log(toNextYear(1500, -100));
