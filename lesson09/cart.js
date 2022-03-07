'use strict';

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,

	getTotalPrice() {
		return this.totalPrice;
	},

	calculateItemPrice() {
		this.totalPrice = 0;
		this.items.forEach((item) => {
			this.totalPrice += item.price * item.count;
		});
	},

	increaseCount(x) {
		this.count += x;
	},

	add(item, price, count = 1) {
		this.items.push({ item: item, price: price, count: count });
		this.increaseCount(count);
		this.calculateItemPrice();
	},

	clear() {
		this.items.length = 0;
		this.totalPrice = 0;
		this.count = 0;
	},

	print() {
		console.log(JSON.stringify(this.items));
		console.log(this.getTotalPrice());
	},
};

cart.add('ноутбук', 1000, 2);
cart.add('монитор', 500, 2);
cart.add('модем', 300, 10);

cart.print();
