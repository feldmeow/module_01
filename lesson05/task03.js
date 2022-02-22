'use strict';
{
	const str = prompt('Введите строку');

	const stringToArr = (string) => {
		return string.split('');
	};
	const arrReverse = (arr) => {
		return arr.reverse();
	};
	const arrToString = (arr) => {
		return arr.join('');
	};
	console.log(arrToString(arrReverse(stringToArr(str))));
}
