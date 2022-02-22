'use strict';

{
	const goodName = prompt('Введите название товара', 'Ноутбук'),
		quantityOfGoods = +prompt('Введите количество товара', '10'),
		categoryOfGoods = prompt('Введите категорию товара', 'Компьютеры'),
		goodPrice = +prompt('Введите цену товара', '10000');

	if (isNaN(goodPrice) || isNaN(quantityOfGoods)) {
		console.log('Вы ввели некорректные данные');
	} else {
		console.log(
			`Цена - тип данных - ${typeof goodPrice}, Количество товара - тип данных - ${typeof quantityOfGoods}`
		);
		console.log(
			`На складе ${quantityOfGoods} шт товара "${goodName}" на сумму ${
				goodPrice * quantityOfGoods
			} деревянных`
		);
	}
}
