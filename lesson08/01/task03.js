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
	const generateNumbersArr = (length, min, max, parity) => {
		let num = 0;
		for (let k = 1; k <= length; k++) {
			num = getRandomNum(min, max);

			if (num % 2 !== 0 && parity === 'even') {
				num++;
				if (num > Math.max(min, max)) {
					num -= 2;
				}
				if (num < Math.min(min, max)) {
					num += 2;
				}
			}
			if (num % 2 == 0 && parity === 'odd') {
				num++;
				if (num > Math.max(min, max)) {
					num -= 2;
				}
				if (num < Math.min(min, max)) {
					num += 2;
				}
			}
			nums.push(num);
		}
		return nums;
	};

	console.log(generateNumbersArr(10, -10, 10, 'odd'));
}
