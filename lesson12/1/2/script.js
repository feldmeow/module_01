'use strict';

const array = [];

const addToArr = (arr) => {
  let sum = 0;
  arr.push(Math.round(Math.random() * 10));
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum < 50) {
    console.log(`массив: ${arr}, сумма элементов ${sum}`);
    return addToArr(arr);
  } else return arr;
};
console.log(addToArr(array));
