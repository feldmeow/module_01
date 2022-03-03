'use strict';

{
	let nums = [];

	// функция генерация числа
	const getRandomNum = (min, max) => {
		return (
			Math.floor(
				Math.random() * (Math.max(min, max) - Math.min(min, max) + 1)
			) + Math.min(min, max)
		);
	};

	// функция создания массива из генерируемых чисел
	const generateNumbersArr = (length, min, max) => {
		for (let k = 1; k <= length; k++) {
			nums.push(getRandomNum(min, max));
		}
		return nums;
	};

	console.log(generateNumbersArr(5, -5, 6));
}
