'use strict';

let nums = [];

// функция создания массива из генерируемых чисел
const generateNumbersArr = (length) => {
	for (let k = 1; k <= length; k++) {
		nums.push(Math.floor(Math.random() * 100) + 1);
	}
	return nums;
};

console.log(generateNumbersArr(100));
