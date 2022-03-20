'use strict';

const rectangle = {
  height: 5,
  width: 5,
  set setWidth(val) {
    if (typeof val === 'number') this.width = val;
  },
  set setHeight(val) {
    if (typeof val === 'number') this.height = val;
  },
  get area() {
    return `${this.width * this.height} см`;
  },
  get perimetr() {
    return `${this.width + this.height} см`;
  },
};
rectangle.setWidth = '10';
rectangle.height = 10;
console.log(rectangle.area);
console.log(rectangle.perimetr);
console.log(rectangle);
