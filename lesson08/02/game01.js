'use strict';
{
	const isNumber = function (n) {
		return !isNaN(parseFloat(n));
	};
	function hiddenNumber() {
		const hiddenNum = Math.floor(Math.random() * 100); //генерация числа
		let count = 10;
		function getNum() {
			let number = prompt(
				`Угадай число от 1 до 100 (Осталось попыток: ${count})`
			); //запрос числа
			const isRetry = () => {
				if (confirm('Хотите сыграть ещё?')) {
					hiddenNumber();
				} else {
					alert('До свидания!');
				}
			};
			function result() {
				function alertMessage() {
					if (+number === hiddenNum) {
						alert('Вы угадали!');
						isRetry();
					} else if (!isNumber(number)) {
						count -= 1;
						alert('Введи число!');
					} else if (number > hiddenNum) {
						count -= 1;
						alert('Загаданное число меньше');
					} else if (number < hiddenNum) {
						count -= 1;
						alert('Загаданное число больше');
					}
				}
				if (+number === hiddenNum) {
					return alertMessage();
				} else if (number === null) {
					alert('До свидания!');
					return false;
				} else {
					alertMessage();
					if (count > 0) {
						getNum();
					} else {
						alert('Попытки закончились :(');
						isRetry();
					}
				}
			}
			result();
		}
		getNum();
	}
	hiddenNumber();
}
