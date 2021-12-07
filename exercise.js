// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }

// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   }
// }

// alert(arr.filter(inBetween(3, 6)));
// alert(arr.filter(inArray([1, 2, 10])));

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(name) {
//   users.sort((a, b) => a.name > b.name ? 1 : -1);
// }

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();