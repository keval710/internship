//!IIFE Function
(() => {
  console.log("ho");
})();

//!Difference between normal function and arrow function
//? 1)Argument object are not available in Arrow Function
//? 2)Arrow Function do not have their own this
//? 3)Normal Function used  When we need Control of the function via this

//! CallBack Hell
let callBack1 = () => {
  setTimeout(() => {
    console.log("H");
    setTimeout(() => {
      console.log("e");
      setTimeout(() => {
        console.log("l");
      }, 3000);
    }, 2000);
  }, 1000);
};
// callBack1();

//! Array Destructuring
let arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr; //? In object We Used {}

console.log(a, b, c);

//! Rest Convert normal To Array But Spread iterables into individual elements
let ab = (x, y) => x + y;
// var a = 2

console.log(ab(2, 5));
var x = 10;

//? task For Rest Time
function abc() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

abc();

//! Promise Task
async function firstSuccessfulPromise(promiseArray) {
  // Write your code here
  for (const value of promiseArray) {
    try {
      const result = await value;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  throw new Error("Nothing");
}

let promise = firstSuccessfulPromise([
  new Promise((resolve, reject) => reject()),
  new Promise((resolve, reject) => resolve("Success!")),
]);

promise.then((result) => console.log(result));

//! Done
function pipeline(...funcs) {
  return (arg) => {
    return funcs.reduce((res, fun) => fun(res), arg);
  };
}

let fun = pipeline(
  (x) => x * 3,
  (x) => x + 1,
  (x) => x / 2
);
console.log(fun(3));

//! Cookie
// Size 4kb
// Cookie structure "name = value"
// We can assign cookie via document.cookie = cookie name and value
// in this Encoding and decoding is available
// for Encoding encodeURIComponent("") used
// for decoding decodeURIComponent("") used
// Cookie document.cookie = "name=keval; expires=fri 12 jan 2024 12:00:00 UTC"

//setImmediate() Vs setTimeout() Vs process.nextTick()

setImmediate(() => {
  console.log("its immediate");
}); //? Whenever we call setImmediate() method, it’s callback function is placed in the check phase of the next event queue. There is slight detail to be noted here that setImmediate() method is called in the poll phase and it’s callback functions are invoked in the check phase.

setTimeout(() => {
  console.log("its setTimeout");
}, 0);

process.nextTick(() => {
  console.log("its NextTick");
}); //? process.nextTick() method adds the callback function to the start of the next event queue. It is to be noted that, at the start of the program process.nextTick() method is called for the first time before the event loop is processed.
