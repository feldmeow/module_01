'use strict';

const discountCount = (count, sum) => {
	if (count > 10) {
		console.log('Скидка по количеству товара =', sum * 0.03);
		return sum * 0.03;
	} else {
		console.log('Скидка по количеству товара =', 0);
		return 0;
	}
};

const discountSum = (sum) => {
	if (sum > 30000) {
		console.log('Скидка по сумме превышения =', (sum - 30000) * 0.15);
		return (sum - 30000) * 0.15;
	} else {
		console.log('Скидка по сумме превышения =', 0);
		return 0;
	}
};

const discountPromo = (promo, sum) => {
	if (promo === 'METHED') {
		console.log('Скидка по промокоду =', sum * 0.1);
		return sum * 0.1;
	} else if (promo === 'G3H2Z1' && sum > 2000) {
		console.log('Скидка по промокоду =', 500);
		return 500;
	} else {
		console.log('Скидка по промокоду = ', 0);
		return 0;
	}
};
const cart = +prompt('сумма корзины'),
	goods = +prompt('количество товаров'),
	promo = prompt('промокод');
const calculate = (sumCart, countOfGoods, promocode) => {
	let sum = sumCart - discountCount(countOfGoods, sumCart);
	sum = sum - discountSum(sum);
	sum = sum - discountPromo(promocode, sum);
	return sum;
};
console.log(calculate(cart, goods, promo));
