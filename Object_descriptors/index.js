const person = {
  name: 'Mark',
  age: 42,
  job: 'Actor'
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptor(person, 'age'));
console.log(Object.getOwnPropertyDescriptor(person, 'job'));

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(person, 'age', {
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(person, 'job', {
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptor(person, 'age'));
console.log(Object.getOwnPropertyDescriptor(person, 'job'));

person.name = 'John';
console.log(person.name);

for (const key in person) {
  console.log(key);
}

console.log(delete person.name);