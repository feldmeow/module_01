'use strict';

{
	const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

	const getAverageValue = (arr) => {
		let nums = 0;
		for (let num of arr) {
			nums += num;
		}
		return Math.floor(nums / arr.length);
	};

	console.log(getAverageValue(allСashbox));
}
