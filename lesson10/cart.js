'use strict';

const cart = {
	items: [],
	count: 0,
	get totalPrice() {
		return this.calculateItemPrice();
	},

	calculateItemPrice() {
		let price = 0;
		this.items.forEach((item) => {
			price += item.price * item.count;
		});
		return price;
	},

	increaseCount(x) {
		this.count += x;
	},

	add(item, price, count = 1) {
		this.items.push({ item: item, price: price, count: count });
		this.increaseCount(count);
	},

	clear() {
		this.items.length = 0;
		this.totalPrice = 0;
		this.count = 0;
	},

	print() {
		console.log(JSON.stringify(this.items));
		console.log(this.totalPrice);
	},
};

cart.add('ноутбук', 1000, 2);
cart.add('монитор', 500, 2);
cart.add('модем', 300, 10);

cart.print();
