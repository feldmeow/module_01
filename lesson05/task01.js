'use strict';
const price = +prompt('Введите сумму покупки в евро');
const convert = (priceInEuro) => priceInEuro * 1.2 * 73;
console.log(convert(price));
