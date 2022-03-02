'use strict';

const names = [
	'Noah',
	'Liam',
	'Mason',
	'Jacob',
	'Robot',
	'William',
	'Ethan',
	'Michael',
	'Alexander',
];
const namesWithPrefix = [];

const addPrefix = (arr, prefix) => {
	for (let name of arr) {
		namesWithPrefix.push(prefix + ' ' + name);
	}
	return namesWithPrefix;
};

console.log(addPrefix(names, 'Mr'));
