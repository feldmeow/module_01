'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(value) {
    if (value === 'METHED') this.discount = 15;
    else if (value === 'NEWYEAR') this.discount = 21;
  },

  calculateItemPrice() {
    let price = 0;
    this.items.forEach((item) => {
      price += item.price * item.count;
    });
    return price - (price / 100) * this.discount;
  },

  increaseCount(x) {
    this.count += x;
  },

  add(item, price, count = 1) {
    this.items.push({item, price, count});
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
cart.setDiscount = 'METHED';
cart.add('ноутбук', 1000, 2);
cart.add('монитор', 500, 2);
cart.add('модем', 300, 10);

cart.print();
