// sayHi.counter = 0;

// function sayHi() {
//   console.log('hi');

//   sayHi.counter++
// }


// for(let i = 0; i < 5; i++) {
//   sayHi()
// }

// console.log(`호출 횟수: ${sayHi.counter}회`);

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     func('guest');
//   }
// };

// let welcome = sayHi;
// sayHi = null;

// welcome();

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = value => count = value;

//   counter.decrease = () => count--;

//   return counter;
// }

// console.log(counter)


function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2))
console.log(sum(5)(-1)(2))
console.log(sum(6)(-1)(-2)(-3))
console.log(sum(0)(1)(2)(3)(4)(5))
