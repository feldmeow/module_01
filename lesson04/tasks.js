'use strict';

// Первое задание

{
	const rain = Math.round(Math.random());

	if (rain === 1) {
		console.log('Дождь идёт');
	} else if (rain === 0) {
		console.log('Дождя нет');
	}
}

// Второе задание

{
	const firstExam = +prompt('Введите баллы за первый экзамен', '100'),
		secondExam = +prompt('Введите баллы за второй экзамен', '100'),
		thirdExam = +prompt('Введите баллы за третий экзамен', '100');

	if (firstExam + secondExam + thirdExam >= 265) {
		console.log('Поздравляю, вы поступили на бюджет!');
	} else if (firstExam + secondExam + thirdExam < 265) {
		console.log('Вы не поступили');
	} else {
		console.log('Произошла ошибка');
	}
}

// Третье задание

{
	const money = +prompt('Какую сумму вы бы хотели снять?');
	if (money > 0) {
		if (money % 100 === 0) {
			console.log('Всё хорошо, данная сумма может быть выдана');
		} else if (money % 100 > 0) {
			console.log(
				'Данная сумма не может быть выдана, введите сумму кратную 100'
			);
		}
	} else {
		console.log('Произошла ошибка');
	}
}
