// Mr. Freeze

Object.freeze(MrFreeze);

// simple class

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

// Fun with ES6 Classes #1 - People, people, people

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName || 'John';
    this.lastName = lastName || 'Doe';
    this.age = age || 0;
    this.gender = gender || 'Male';
  }
  
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
   static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

// SantaClausable Interface

function isSantaClausable(obj) {
  if (typeof obj.distributeGifts === 'function' && typeof obj.sayHoHoHo === 'function' && typeof obj.goDownTheChimney === 'function') {
    return true;
  } else {
    return false;
  }
}

// Fun with ES6 Classes #2 - Animals and Inheritance

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 0;
    this.species = "shark";
  }
  
  introduce() {
    return super.introduce();
  }
}

class Cat extends Animal {
    constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  
  meow() {
    return "  Meow meow!";
  }
  
  introduce() {
    return super.introduce() + this.meow();
  }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = "dog";
  }
  
  introduce() {
    return super.introduce();
  }
  
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  
  get surfaceArea() {
    const ab = this.length * this.width;
    const bc = this.width * this.height;
    const ac = this.length * this.height;
    return 2 * (ab + bc + ac);
  }
  
  get volume() {
    return this.length * this.width * this.height;
  }
  
}
class Cube extends Cuboid { 
  constructor(length){
    super();
    this.length = length;
    this.width = length;
    this.height = length;
  }
  
  get surfaceArea() {
    const ab = this.length * this.width;
    const bc = this.width * this.height;
    const ac = this.length * this.height;
    return 2 * (ab + bc + ac);
  }
  
  get volume() {
    return this.length * this.width * this.height;
  }
}

// Fun with ES6 Classes #4 - Cubes and Setters

class Cube {
  constructor(length) {
    this.length = length;
  }
  
  get surfaceArea() {
    const ab = this.length * this.length;
    const bc = this.length * this.length;
    const ac = this.length * this.length;
    return 2 * (ab + bc + ac);
  }
  
  set surfaceArea(value) {
    this.length = Math.sqrt(value / 6);
  }
  
  get volume() {
    return this.length**3;
  }
  
  set volume(value) {
    this.length = Math.cbrt(value);
  }
}

// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender);
    this.master = master;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.loyal = true;
  }
}

// Fun with ES6 Classes #6 - Fake Files (Basic)

class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this.contents = contents;
    this._filename = fullName.substring(0, fullName.lastIndexOf('.'));
    this._extension = fullName.substring(fullName.lastIndexOf('.') + 1, );
    this.counterForWords = 0;
    this.counterForSymbols = 0;
  }
  
  get fullName() {
      return this._fullName;
  } 
  
  get filename() {
      return this._filename;
  }
  
  get extension() {
      return this._extension;
  }
  
  getContents() {
      return this.contents;
  }
  
  write(str) {
    if (this.contents === '') {
      return this.contents = this.contents + str;
    } else {
      return this.contents = this.contents + '\n' + str;
    }
  }
  
  gets() {
    this.contentArray = this.contents.split('\n');
    if (this.counterForWords === this.contentArray.length) {
      return undefined;
    } else {
      return this.contentArray[this.counterForWords++];
    }
  }
  
  getc() {
    this.contentArraySymbols = this.contents.split('');
    if (this.counterForSymbols === this.contentArraySymbols.length) {
      return undefined;
    } else {
      return this.contentArraySymbols[this.counterForSymbols++];
    }
  }
}

// Training JS #37: Unlock new weapon---RegExp Object

function countAnimals(animals, count) {
  const counter = [];
  
  for (const word of count) {
    const matches = animals.match(new RegExp(word, 'g'));

    if (matches === null) {
      counter.push(0);
    } else {
      counter.push(matches.length);
    }
  }
  
  return counter;
}

// Training JS #38: Regular Expression--"^","$", "." and test()

function findSimilarity(str, word) {
  const matches = [];
  str = str.split(' ');
  let reg1 = new RegExp(word[0] + ".+" + word[word.length - 1] + "$");
  
  for (const words of str) {
    if (reg1.test(words) === true && words.length === word.length) {
      matches.push(words);
    }
  }
  
  return matches.join(' ');
}

// Training JS #39: Regular Expression--"?", "*", "+" and "{}"

var regex = new RegExp(/^(-|9).*0{4,}$/);

// Training JS #40: Regular Expression--"|", "[]" and "()"

var regex = new RegExp(/(http:\/\/|https:\/\/)+[a-z0-9.]+(\.com|\.net)/gi);

// Training JS #41: Regular Expression--"\"

const regex = new RegExp(/\b(?:(\w)\1|(\w)\w\2|(\w)(\w)\4\3|(\w)(\w)\w\6\5|(\w)(\w)(\w)\9\8\7|(\w)(\w)(\w)\w\12\11\10)\b/g);

// Training JS #42: Regular Expression--( ?: ), ( ?= ) and ( ?! )

var regex = /\d(?=(\d{3})+$)/g;

function addCommas(money, reg) {
  return money.replace(reg,x=>x+",");
}

// Color Ghost

class Ghost {
  constructor () {
    const colors = ['white', 'yellow', 'purple', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.color = colors[randomIndex];
  }
};

// Who's Online?

const whosOnline = (friends) => {
  const listWhosOnline = friends.reduce((result, user) => {
    if (user.status === 'online' && user.lastActivity > 10) {
      user.status = 'away';
    }
      
    if (!result[user.status]) {
      result[user.status] = [user.username];
    } else {
      result[user.status].push(user.username);
    }
      
    return result;
    
  },{})
  
  return listWhosOnline;
}

// Refactored Greeting

class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet(person) {
    return `Hello ${person}, my name is ${this.name}`;
  }
}

// Building blocks

class Block{
  constructor(data){
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }
  
  getWidth() {
    return this.width;
  }
  
  getLength() {
    return this.length;
  }
  
  getHeight() {
    return this.height;
  }
  
  getVolume() {
    return this.width * this.length * this.height;
  }
  
  getSurfaceArea() {
    const ab = this.length * this.width;
    const bc = this.width * this.height;
    const ac = this.length * this.height;
    return 2 * (ab + bc + ac);
  }
}

// FIXME: Get Full Name

class Dinglemouse{
  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

// "this" is a problem

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName;
}

// Ninja vs Samurai: Strike

class Warrior {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
  
  strike(enemy, swings) {
    enemy.health = Math.max(0, enemy.health - (swings * 10));
  }
}

// Split The Bill

function splitTheBill(x) {
  let numberOfPeople = 0;
  let totalSpent = 0;
    
  for (const person in x) {
    numberOfPeople += 1;
    totalSpent += x[person];
  }

  const averageBill = totalSpent / numberOfPeople;
    
  for (const person in x) {
    x[person] = Number((x[person] - averageBill).toFixed(2));
  }
    
  return x;  
}

// A Promise is a Promise

async function promiseHelloWorld() {
  return 'Hello World!';
} 

// Anonymous Returns.

name = 'The Window';

let alpha = {
  name : 'My Alpha',
  getNameFunc : function() {
    return function() {
      return `${alpha.name}`;
    };
  }
};

// Jokes you've been 'awaiting' for ... promise

async function sayJoke(apiUrl, jokeId) {
  let joke;
  
  try {
    if (apiUrl !== 'http://great.jokes/christmas') {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    joke = data.jokes.find(joke => joke.id === jokeId);
    
    if (joke === undefined) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }
  } catch (err) {
    throw err;
  }
  
  return {
    saySetup () { return joke.setup ; },
    sayPunchLine() { return joke.punchLine; }
  };
}

// Basics - Generators #1

function* generator() {
  let counter = 1;
  
  while(true) {
    const number = yield counter;
    
    if (number === undefined) {
      counter += 1;
    } else {
      counter = number;
    }
  }
}

// Promises Made and Broken: The Misadventures of Bob the Highly Paid Consultant

async function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;

  shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  
  const profile = await CustomerAPI.getProfileAsync(user);
  
  zipCode = profile.zipCode;
  
  shippingRate = calculateShipping(shoppingCart, zipCode);
  
  orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}


function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  Promise.all([
    OrderAPI.getShoppingCartAsync(user),
    CustomerAPI.getProfileAsync(user)
  ]).then(([cart, profile]) => {
    shoppingCart = cart;
    zipCode = profile.zipCode,
    shippingRate = calculateShipping(shoppingCart, zipCode);
  }).then(() => {
     return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  }).then(orderSuccessful => {
      console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
  })
}

// Multiplication - Generators #2

function* generator(a) {
  let b = 1, d;
  
  if (a === undefined) {
    d = 1; 
  } else {
    d = a;
  }
  
  while(true) {
    let c = d * b;
    yield `${d} x ${b} = ${c}`;
    b++;
  }
}

// Nuclear Missile Manager

function launchAll(launchMissile) {
  for(let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}

// This isn't what you think! The Misadventures of Bob the Highly Paid Consultant #2

ShoppingCart.prototype.addButtonClicked = function(item) {
  this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));  
};

ShoppingCart.prototype.addButtonClicked1 = function({item, quantity}) {
  if (quantity > 0) {
    this.addToCartAsync(item, 1, (result) => {
      this.addButtonClicked2(result);
    });
  }
};

ShoppingCart.prototype.addButtonClicked2 = function(success) {
  var self = this
  
  if (success) {
    this.updateCartDisplayAsync(function (result) {
      self.addButtonClicked3(result);
    });
  }
};

ShoppingCart.prototype.addButtonClicked3 = function(success) {
  this.showMessage(`${success? "Successfully" : "Unsuccessfully"} added item to cart`);
};

// Well, that's just (proto)typical! The Misadventures of Bob the Highly Paid Consultant #3

function Cart(user) {
  this.user = user;
  this.cart = [];
}

Cart.prototype = {
  add: function(item) {
    this.cart.push(item);
    console.log(this.cart);
  },
  
  remove: function(item) {
    this.cart = this.cart.filter(i => i.id !== item.id);
    console.log(this.cart);
  },
  
  clear: function() {
    this.cart = [];
    console.log(this.cart);
  },
  
  subtotal: function() {
    return this.cart.reduce( (sum, item) => sum + item.quantity * item.value, 0);
    console.log(this.cart);
  },
  
  toString: function() {
    return this.cart.map( item => `${item.name}: ${item.quantity}@ ${item.value} ea.`).join("\n");  
    console.log(this.cart);
  }
};

// Basic subclasses - Adam and Eve

class God{
  static create(){
    return [new Man, new Woman]
  }
}

class Human extends God {
}

class Man extends Human {
}

class Woman extends Human {
}

// Fibonacci Generator Function (retired)

function* fibonacci() {     
  let a = 0;
  let b = 1;
  
  while (true) {
    const number = a;
    const next = a + b;
    a = b;
    b = next;
    yield number;
  }
}

// Generating Generators - Generators #3

function* generator(a, b) {
  for (let i = a; i <= b; i++) {
    function* generatorInner() {
      for (let c = 1; c <= 10; c++) {
        let d = i * c;
        yield `${i} x ${c} = ${d}`;
      }
    }
    yield generatorInner();
  }
}

// Deep Freeze

Object.deepFreeze = function deepFreeze(object) {
  Object.freeze(object);
  
  for (const key in object) {
    if (typeof object[key] === 'object') {
      Object.deepFreeze(object[key]);
    }
  }
}

// The Enigma Machine - Part 1: The Plugboard

Plugboard = function(wires) {
  if (!wires) {
    return "";
  }
  
  const mapping = {};
  
  for (let i = 0; i < wires.length; i += 2) {
    let a = wires[i];
    let b = wires[i + 1];

    if (wires.length > 20 || wires.length % 2 !== 0 || mapping[a] || mapping[b]) {
      throw new Error;
    }
    
    mapping[a] = b;
    mapping[b] = a;
  }
  
  function process(wire){
    let symbolCode = wire.charCodeAt(0);
    if (symbolCode >= 65 && symbolCode <= 90) {
      if (mapping[wire]) {
        return mapping[wire];
      } else {
        return wire;
      }
    } else {
      return wire;
    }
  }
  return {
    process
  }  
}

// Calculating with Functions

function zero(operation) {
  if (operation) {
    return operation(0);
  } else {
    return 0;
  }
}

function one(operation) {
  if (operation) {
    return operation(1);
  } else {
    return 1;
  }
}

function two(operation) {
  if (operation) {
    return operation(2);
  } else {
    return 2;
  }
}

function three(operation) {
  if (operation) {
    return operation(3);
  } else {
    return 3;
  }
}

function four(operation) {
  if (operation) {
    return operation(4);
  } else {
    return 4;
  }
}

function five(operation) {
  if (operation) {
    return operation(5);
  } else {
    return 5;
  }
}

function six(operation) {
  if (operation) {
    return operation(6);
  } else {
    return 6;
  }
}

function seven(operation) {
  if (operation) {
    return operation(7);
  } else {
    return 7;
  }
}

function eight(operation) {
  if (operation) {
    return operation(8);
  } else {
    return 8;
  }
}

function nine(operation) {
  if (operation) {
    return operation(9);
  } else {
    return 9;
  }
}

function plus(right) {
  return function(left) {
    return left + right;
  }
}

function minus(right) {
  return function(left) {
    return left - right;
  }
}

function times(right) {
  return function(left) {
    return left * right;
  }
}

function dividedBy(right) {
  return function(left) {
    return Math.floor(left / right);
  }
}

// Defining getters and setters on an existing class

Object.defineProperty(Person.prototype, 'name', {
  get() {
    return this.firstName + ' ' + this.lastName;
  },
  
  set(value) {
    value = value.split(' ');
    this.firstName = value[0];
    this.lastName = value[1];
  }
})

// A Chain adding function

function add(n){
  const sum = function(num) {
    return add(n + num);
  }
  
  sum.valueOf = function() {
    return n;
  }
  
  return sum;
}

// PaginationHelper

class PaginationHelper {
	constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}

	itemCount() {
	  return this.collection.length;
	}

	pageCount() {
	  return Math.ceil(this.collection.length / this.itemsPerPage);
	}

	pageItemCount(pageIndex) {
    const totalPages = this.pageCount();

    if (pageIndex < 0 || pageIndex >= totalPages) {
      return -1;
    } else if (pageIndex === totalPages - 1) {
      return this.collection.length % this.itemsPerPage;
    } else {
      return this.itemsPerPage;
    }
	}

	pageIndex(itemIndex) {
	  const totalPages = this.pageCount();

    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    } else {
      return Math.floor(itemIndex / this.itemsPerPage);
    }
	}
}

// Write JavaScript's 'call' function using apply.

Function.prototype.call = function(context, ...arg) {
  return this.apply(context, arg);
}

// Function Cache

function cache(func) {
  const obj = {};
  
  return function(...arg) {
    const key = arg.join(',')
    
    if (key in obj) {
      return obj[key];
    } else {
      const result = func(...arg);
      obj[key] = result;
      return result;
    }
  }
}

// Cylon Evolution

function Cylon(model){
  this.model = model;
}

Cylon.prototype.attack = function() {
  return "Destroy all humans!";
}

function HumanSkin(model){
  Cylon.call(this, model);
}

HumanSkin.prototype = Object.create(Cylon.prototype);

HumanSkin.prototype.infiltrate = function() {
  return "Infiltrate the colonies";
}

// Find all javascript files

function findAllJavascriptFiles(folder, callback) {
  const arr = [];

  folder.size((s) => {
    let pending = s;

    if (pending === 0) {
      return callback(arr);
    }

    for (let i = 0; i < s; i++) {
      folder.read(i, (f) => {
        if (typeof f === 'string') {
          if (f.endsWith('.js')) {
            arr.push(f);
          }

          pending--;
          if (pending === 0) {
            callback(arr);
          }
        } else if (f instanceof Folder) {
          findAllJavascriptFiles(f, (nestedFiles) => {
            arr.push(...nestedFiles);

            pending--;
            if (pending === 0) {
              callback(arr);
            }
          });
        }
      });
    }
  });
}

// Calculating with objects

Num.prototype[Symbol.toPrimitive] = function(value) {
  if (value === 'number') {
    return this.num;
  } 
  if (value === 'string') {
    return this.toString();
  }

  return this.num;
}
console.log(new Num(5) + new Num(5));

// Array#reduce

Array.prototype.reduce = function(process, initial) {
  if (initial === undefined) {
    initial = this[0];
    for (let i = 1; i < this.length; i++) {
      initial = process(initial, this[i]);
    }
  } else {
    for (let j = 0; j < this.length; j++) {
      initial = process(initial, this[j]);
    }
  }

  return initial;
}

// Concatenating functions

Function.prototype.pipe = function() {
  const firstFunction = this;  
  const allFunctions = [...arguments];
  
  return function(value) {
    let result = firstFunction(value);
    
    for (let i = 0; i < allFunctions.length; i++) {
      result = allFunctions[i](result);
    }
    
    return result;
  };
};

// How new Works

var myObj = {};

myObj.__proto__ = MyObject.prototype;

MyObject.call(myObj);

// Replicate `new`

function nouveau(Constructor, ...args) {
  const myObj = Object.create(Constructor.prototype);
  const result = Constructor.call(myObj, ...args);
  
  if (result !== null) {
    if (typeof result === 'object' || typeof result === 'function') {
      return result;
    }
  }

  return myObj;
}

// Wrapped Function

Object.defineProperty(
    Function.prototype,
    'wrap',
    {value:
        function wrap(wrappedFunc, ...args) {
            const originalFn = this;
            return function(...args) {
              return wrappedFunc(originalFn, ...args);
            };
        }
    }
);

// Power .bind()

Function.prototype.bind = function(ctx) {
  const fn = this;

  return function(...args) {
    const context = this === global ? ctx : this;
    return fn.apply(context, [...args]);
  }
}

// Pipelining and composing functions

function pipeline(seed, ...args) {
  let result = seed;
  
  for (let i = 0; i < args.length; i++) {
    result = args[i](result);
  }
  
  return result;
};

function compose(...args) {
  return function(value) {
    let result = value;
    
    for (let i = args.length - 1; i >= 0; i--) {
      result = args[i](result)
    }
    return result
  }
};

