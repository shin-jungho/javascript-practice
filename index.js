// function f() {
//   let value = 123; 

//   return function() {
//     alert(value);
//   }
// }

// let g = f();

// console.log(g);

// function f() {
//   let value = Math.random();

//   return function() {
//       if (typeof window !== 'undefined')
//       {alert(value);}
//     };
// }

// let arr = [f(), f(), f()];
// console.log(arr);

let value = '이름이 같은 다른 변수';

function f() {
  let value = '가장 가까운 변수';

  function g() {
    debugger;
  }

  return g;
}

let g = f();
g();

console.log(g);