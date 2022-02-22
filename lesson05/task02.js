'use strict';

const str = prompt('Введите строку');

const stringToUpperLowerCase = (string) => {
	let newStr = string.toLowerCase().replace(string[0], string[0].toUpperCase());
	return newStr;
};
console.log(stringToUpperLowerCase(str));
