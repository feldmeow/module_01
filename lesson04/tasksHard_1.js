'use strict';

// первое задание
{
	let money = 100000;
	let tax;
	if (money > 0) {
		if (money >= 50000) {
			tax = money * 0.3;
		} else if (15000 <= money < 50000) {
			tax = money * 0.2;
		} else if (money < 15000) {
			tax = money * 0.13;
		}
		console.log('Налог равен =', tax);
	} else console.log('Произошла ошибка');
}
// второе задание

{
	let money = 100000;
	let tax = 0,
		lowTax = 14999 * 0.13, // 14999, т.к. доход до 15000
		midTax = 35001 * 0.2;
	if (money > 0) {
		if (money >= 50000) {
			// от 50000 включительно
			tax = (money - 50000) * 0.3 + lowTax + midTax;
		} else if (15000 <= money && money < 50000) {
			tax = (money - 14999) * 0.2 + lowTax;
		} else if (money < 15000) {
			tax = money * 0.13;
		}
		console.log('Налог равен =', tax);
	} else console.log('Произошла ошибка');
}
