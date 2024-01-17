//! 1) Write a JavaScript program to find the most frequent item in an array.
let array = [1, 2, 3, 3, 3, 4, 5, 5];

let secondFun = (array) => {
  let obj = {};
  let maxVal;

  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    if (!obj[key]) {
      obj[key] = 0;
    }

    obj[key]++;

    if (!maxVal || obj[key] > obj[maxVal]) {
      maxVal = key;
    }
  }

  console.log(obj);

  obj[maxVal] >= 2
    ? console.log(`most frequently available is ${maxVal}`)
    : console.log(`not any value repeat`);
};
secondFun(array);

//! 2) How do you check if an element exists in an array?
let arr = [1, 2, 3, 4, 5, 6, 7];

let val = 5;

let fun = (arr, val) => {
  arr.includes(val) ? console.log("Exist") : console.log("Not Exist");
};

fun(arr, val);

//! 3) How do you remove an element from an array at a specific index?
let originalArray = [1, 2, 3, 4, 5, 6];

let index = 5;

let thirdFun = (originalArray, index) => {
  if (index > -1) {
    if (index > originalArray.length) {
      console.log("Index is not Available");
    } else {
      originalArray.splice(index, 1);
      console.log(originalArray);
    }
  }
};

thirdFun(originalArray, index);

//! 4) How to fill an array with given value in JavaScript ? with 5
let newArr = new Array(6);

newArr.fill(5);

console.log(newArr);
