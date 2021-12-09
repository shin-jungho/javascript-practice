// let animal = {
//   jumps: null
// };

// let rabbit = {
//   __proto__:animal,
//   jumps: true
// };

// console.log( rabbit.jumps );

// delete rabbit.jumps;

// console.log( rabbit.jumps );

// delete animal.jumps;

// console.log( rabbit.jumps );

// pocket -> bed -> table -> head

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1, 
//   pillow: 2,
//   __proto__: table
// };


// let pockets = {
//   money: 2000,
//   __proto__: bed
// };

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// 햄스터 한 마리가 음식을 찾았습니다.
speedy.eat("apple");
alert( speedy.stomach ); // apple

// 이 햄스터도 같은 음식을 가지고 있습니다. 왜 그럴까요? 고쳐주세요.
alert( lazy.stomach ); // apple