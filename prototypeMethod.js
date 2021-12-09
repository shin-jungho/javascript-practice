let animal = {
  eats: true
};

let rabbit = Object.create(animal);

console.log(rabbit.eats);

console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, {});