'use strict';

const allСashbox = [
	[12, 4500],
	[7, 3210],
	[4, 650],
	[3, 1250],
	[9, 7830],
	[1, 990],
	[6, 13900],
	[1, 370],
];

const getAverageValue = (arr) => {
	let nums = 0;
	for (let num of arr) {
		nums += num;
	}
	return Math.floor(nums / arr.length);
};

const getAveragePriceGoods = (arr) => {
	const averagePrices = [];
	for (let receipt of arr) {
		averagePrices.push(receipt[1] / receipt[0]);
	}
	return getAverageValue(averagePrices);
};

console.log(getAveragePriceGoods(allСashbox));
