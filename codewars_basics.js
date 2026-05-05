// Sum of Multiples

function sumMul(n, m) {
  if (n >= m) {
    return 'INVALID';
  }
  
  let sum = 0;
  
  for (let i = n; i < m; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }
  
  return sum;
}


// Even or Odd

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// Odds-Index

function oddBall(arr) {
  const oddIndex = arr.indexOf('odd');
    
  for (const word of arr) {
    if (oddIndex === word) {
      return true;
    }
  }
    
  return false;
}

// Is n divisible by x and y?

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

// Convert a Boolean to a String

function booleanToString(b) {
  return b.toString();
}

// Basic Mathematical Operations

function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '/') {
    return value1 / value2;
  } else {
    return value1 * value2;
  }
}

// Training JS #7: if..else and ternary operator

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}

// Count the divisors of a number

function getDivisorsCnt(n) {
  let counterDivisorts = 0;
  
  for (let i = 0; i * i <= n; i++) {
    if (n % i === 0 && i * i < n) {
      counterDivisorts += 2;
    } else if (n % i === 0 && i * i === n) {
      counterDivisorts += 1;
    }
  }
  
  return counterDivisorts;  
}

// Century From Year

function century(year) {
  return Math.ceil(year / 100);
}

// Simple multiplication

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  } else {
    return 'No';
  }
}

// Persistent Bugger.

function persistence(num) {  
  let counter = 0;
    
  while (num >= 10 ) {
    num = num.toString();
    let multiplicationResult = 1;

    for (let i = 0; i < num.length; i++) {
      multiplicationResult = multiplicationResult * num[i];
    }

    counter += 1;
    num = multiplicationResult;
  }

  return counter;
}

// Grasshopper - Summation

var summation = function(num) {
  let result = 0;
  
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

// If you can't sleep, just count sheep!!

var countSheep = function(num) {
  let murmur = [];
    
  for (let i = 1; i <= num; i++) {
    if (num > 0) {
      murmur.push(i + ' sheep...');
    } else {
      return murmur.join('');
    }
  }
    
  return murmur.join('');
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val) {
  if (val === false || val === undefined || val === null) {
    return 'false';
  } else {
    return 'true';
  }
}

// Training JS #8: Conditional statement--switch

function howManydays(month) {
  let days;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }

  return days;
}

// Training JS #9: loop statement --while and do..while

function padIt(str, n) {
  let i = 1;    
  
  while (i <= n) {
    if (i % 2 !== 0) {
      str = '*' + str;
      i++;
    } else {
      str = str + '*';
      i++;
    }
  }
  
  return str;
}

// Training JS #10: loop statement --for

function pickIt(arr) {
  let odd = [], even = [];
  
  for (const num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  
  return [odd,even];
}

// Training JS #11: loop statement --break,continue

function grabDoll(dolls) {
  var bag=[];
  
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
      if (bag.length === 3) {
        break;
      }
    } else {
      continue;
    }
  }
  
  return bag;
}

// Training JS #2: Basic data types--Number

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
  let a = v1,   
      b = v1;

  return a + b;
}


function equal2() {
  let a =  v3,
      b =  v1; 

  return a - b;
}

function equal3() {
  let a =  v1, 
      b =  v5; 

  return a * b;
}

function equal4() {
  let a =  v4,
      b =  v5; 

  return a / b;
}

function equal5() {
  let a =  v2,
      b =  v4;

  return a % b;
}

// Training JS #14: Methods of Number object--toString() and toLocaleString()

function colorOf(r, g, b) {
  r = r.toString(16);
  
  g = g.toString(16);
  
  b = b.toString(16);
  
  if (r.length === 1) {
    r = "0" + r;
  }
  
  if (g.length === 1) {
    g = "0" + g;
  }
  
  if (b.length === 1) {
    b = "0" + b;
  }
  
  return "#" + r + g + b;
}

// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr, n) {
  let counter = 0;
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toFixed(2);
    if (arr[i] < n) {
      counter += 1;
    }
  }
  
  return counter;
}

// Training JS #32: methods of Math---round() ceil() and floor()

function roundIt(n) {
  const str = n.toString();
  
  const partsOfStr = str.split('.');
  
  if (partsOfStr[0].length < partsOfStr[1].length) {
    return Math.ceil(n);
  } else if (partsOfStr[0].length > partsOfStr[1].length) {
    return Math.floor(n);
  } else if (partsOfStr[0].length === partsOfStr[1].length) {
    return Math.round(n);
  }
}

// Training JS #33: methods of Math---max() min() and abs()

function maxMin(arr1, arr2) {
  let difference = [];    
  
  let result = [];
  
  for (let i = 0; i < arr1.length; i++) {
    difference.push(Math.abs(arr1[i] - arr2[i]));
  }
  
  const maxNum = Math.max(...difference);
  
  result.push(maxNum);
  
  const minNum = Math.min(...difference);
  
  result.push(minNum);
  
  return result;
}

// Training JS #34: methods of Math---pow() sqrt() and cbrt()

function cutCube(volume, n) {
  if (!Number.isInteger(Math.cbrt(n))) {
    return false;
  }
  
  const allCubeSides = volume / n;
  
  if (!Number.isInteger(allCubeSides)) {
    return false;
  }
  
  const eachSide = Math.round(Math.cbrt(allCubeSides));
  
  if (Math.pow(eachSide, 3) * n !== volume) {
    return false;
  } else {
    return true;
  }
}

// Training JS #36: methods of Math---kata author's lover:random()

function rndCode() {
  const letters = 'ABCDEFGHIJKLM';
  
  let randomLetters = [];
  
  const symbols = '~!@#$%^&*';
  
  let randomSymbols = [];
  
  let randomNumber = Math.floor(10*Math.random())
  
  for (let i = 0; i <= letters.length; i++) {
    const randomLettersIndex = Math.floor(letters.length*Math.random());
    randomLetters.push(letters[randomLettersIndex]);
  }
  
  for (let j = 0; j <= symbols.length; j++) {
    let randomSymbolsIndex = Math.floor(symbols.length*Math.random());
    randomSymbols.push(symbols[randomSymbolsIndex]);
  }
  
  const [firstLetter, secondLetter, ...otherLetters] = randomLetters;
  
  const [firstSymbol, secondSymbol, ...otherSymbols] = randomSymbols;

  return firstLetter + secondLetter + randomNumber + randomNumber + randomNumber + randomNumber + firstSymbol + secondSymbol;
}

// Training JS #16: Methods of String object--slice(), substring() and substr()

function cutIt(arr) {
  let arrLength = [];
  
  let newArr = [];
  
  for (const word of arr) {
    arrLength.push(word.length);
  }
  
  for (const newWord of arr) {
    newArr.push(newWord.slice(0, Math.min(...arrLength)));
  }
  
  return newArr;
}

// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str, c) {
  str = str.toLowerCase();
  
  const firstIndexC = str.indexOf(c);
  
  const lastIndexC = str.lastIndexOf(c);
  
  const diffBetweenIndex = lastIndexC - firstIndexC;
  
  if (firstIndexC !== lastIndexC) {
    return diffBetweenIndex;
  } else if (str.indexOf(c) < 0) {
    return -1;
  } else if (firstIndexC === lastIndexC) {
    return 0;
  }
}

// Training JS #18: Methods of String object--concat() split() and its good friend join()

function splitAndMerge(string, separator) {
  string = string.split(" ");
  
  let newString = [];
  
  for (let word of string) {
    word = word.split('').join(separator);
    newString.push(word);
  }
  
  return newString.join(" ");
}

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

function alienLanguage(str) {
  str = str.toUpperCase().split(" ");
  
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].slice(0, -1) + str[i].slice(-1).toLowerCase();
  }
  
  return str.join(" ");
}

// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

function topSecret(str) {
  let decrypted = "";
    
  for (let i = 0; i < str.length; i++) {
    let symbolCode = str.charCodeAt(i);
        
    if (symbolCode >= 65 && symbolCode <= 90) {
      let pos = symbolCode - 65;
      let newPos = pos - 3;

      if (newPos < 0) {
        newPos += 26;
      }

      let newCode = newPos + 65;
      decrypted += String.fromCharCode(newCode);
    } else if (symbolCode >= 97 && symbolCode <= 122) {
      let pos2 = symbolCode - 97;
      let newPos2 = pos2 - 3;

      if (newPos2 < 0) {
        newPos2 += 26;
      }
            
      let newCode2 = newPos2 + 97;
      decrypted += String.fromCharCode(newCode2);
    } else {
      decrypted += str[i];
    }
  }
    
  return decrypted;
}
//question1: The top secret file number is...
answer1="2877";
//question2: Super agent's name is...
answer2="ItcklH";
//question3: He stole the treasure is...
answer3="Toilet paper";

// Training JS #21: Methods of String object--trim() and the string template

function fiveLine(s) {
  s = s.trim();
  
  return `${s}\n${s+s}\n${s+s+s}\n${s+s+s+s}\n${s+s+s+s+s}`;
}

// Training JS #3: Basic data types--String

a1="A", a2="a", b1="B", b2="b",
c1="C", c2="c", d1="D", d2="d",
e1="E", e2="e", n1="N", n2="n"

function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}

// Training JS #5: Basic data types--Object

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Training Time

function shuffleIt(arr, ...numberPairs) {
  for (let [i, j] of numberPairs) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  return arr;
}

// Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()

function infiniteLoop(arr, d, n) {
  for (let i = 1; i <= n; i++) {
    if (d === "left") {
      const firstElemArr0 = arr[0].shift();
      const firstElemArr1 = arr[1].shift();
      arr[0].push(firstElemArr1);
      const firstElemArr2 = arr[2].shift();
      arr[1].push(firstElemArr2);
      arr[2].push(firstElemArr0);
    } else if (d === "right") {
      const lastElemArr2 = arr[2].pop();
      arr[0].unshift(lastElemArr2);
      const lastElemArr0 = arr[0].pop();
      arr[1].unshift(lastElemArr0);
      const lastElemArr1 = arr[1].pop();
      arr[2].unshift(lastElemArr1)
    }
  }

  return arr;
}

// Training JS #24: methods of arrayObject---splice() and slice()

function threeInOne(arr) {
  const newArr = [...arr];
  
  const result = [];
  
  let parts = [];
  
  let sumParts = 0;
  
  for (let i = 0; i <= newArr.length**30; i = i + 3) {
    if (i % 3 === 0 && i !== 0) {
      parts = newArr.splice(0, 3);
          
      for (let part of parts) {
        sumParts += part;
      }
          
      result.push(sumParts);
      sumParts = 0;  
    }
  }
  
  return result;
}

// Training JS #25: methods of arrayObject---reverse() and sort()

function sortIt(arr) {
  const charCount = {};
  
  const newArr = [...arr];
  
  for (const char of arr) {
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char] += 1;
    }
  }
  
  return newArr.sort((a, b) => {
    if (charCount[a] !== charCount[b]) {
      return charCount[a] - charCount[b];
    } else {
      return b - a;
    }
  })
}

// Training JS #26: methods of arrayObject---map()

function isolateIt(arr) {
  return arr.map(function (item) {
    const length = item.length;

    if (item.length % 2 === 0) {
      const middleLength = length / 2;
      return item.slice(0, middleLength) + '|' + item.slice(middleLength, );
    } else {
      const middleLength = Math.floor(length / 2);
      return item.slice(0, middleLength) + '|' + item.slice(middleLength + 1, );
    }
  })
}

// Training JS #27: methods of arrayObject---filter()

function countGrade(scores) {
  const S = scores.filter(score => {
    if (score === 100) {
      return +1;
    }
  }).length;

  const A = scores.filter(score => {
    if (score < 100 && score >= 90) {
      return +1;
    }
  }).length;

  const B = scores.filter(score => {
    if (score < 90 && score >= 80) {
      return +1;
    }
  }).length;

  const C = scores.filter(score => {
    if (score < 80 && score >= 60) {
      return +1;
    }
  }).length;

  const D = scores.filter(score => {
    if (score < 60 && score >= 0) {
      return +1;
    }
  }).length;

  const X = scores.filter(score => {
    if (score === -1) {
      return +1
    }
  }).length;
  
  return { S, A, B, C, D, X };
}

// Training JS #28: methods of arrayObject---every() and some()

function mirrorImage(arr) {
  const pairs = [];
  
  arr.some((item, index, arr) => {
    if (Number(item.toString().split('').reverse().join('')) === arr[index + 1] && pairs.length < 1 && item.toString().length === arr[index + 1].toString().length) {
      pairs.push(item);
      pairs.push(arr[index + 1]);
    }
  })
  
  if (pairs.length === 0) {
    return [-1, -1];
  } else {
    return pairs;
  } 
}

// Training JS #29: methods of arrayObject---concat() and join()

function bigToSmall(arr) {
  return str = [].concat(...arr).sort((a, b) => b - a).join('>');
}

// Training JS #30: methods of arrayObject---reduce() and reduceRight()

function tailAndHead(arr) {
  const sum = arr.reduce((currentSum, currentNum, index, arr) => {
    if (arr[index + 1] !== undefined) {
      currentNum = Number(arr[index].toString().slice(-1));
      currentNum += Number(arr[index + 1].toString().slice(0, 1));
      currentSum.push(currentNum);
      return currentSum;
    }

    return currentSum;
  }, []);     

  const multiplication = sum.reduce((result, num) => {
    return result * num;
  }, 1);
  
  return multiplication;
}

// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()

function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  } else if (arr.includes(5) && arr.includes(13)) {
    return "It's a black array";
  } else {
    return "It's a white array";
  }
}

// Strings, strings, strings (Easy)

Boolean.prototype.toString = function() {
  if (this.valueOf() === false) {
    return "false";
  } else {
    return "true";
  }
}

Number.prototype.toString = function() {
  return this.valueOf() + "";
}

Array.prototype.toString = function() {
  return `[${this.join(",")}]`;
}

// Count strings in objects

function strCount(obj) {
  let counter = 0;
  
  for (const elem in obj) {
    if (typeof(obj[elem]) === 'string') {
      counter += 1;
    } else if (typeof(obj[elem]) === 'object') {
      counter += strCount(obj[elem]);
    }
  }
  
  return counter;
}

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  let counter = 0;    
  
  for (const obj of list) {
    if (obj.continent === 'Europe' && obj.language === 'JavaScript') {
      counter += 1;
    }
  }
  
  return counter;
}

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

function findSenior(list) {
  const ages = [];
  
  for (const obj of list) {
    ages.push(obj.age);
  }
  
  const maxAge = Math.max(...ages);
  
  const arr = list.filter((item) => {
    return item.age === maxAge;
  })
  
  return arr;
} 

// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

function askForMissingDetails(list) {
  const filteredList = [];
  
  for (const obj of list) {
    if (Object.values(obj).includes(null)) {
      filteredList.push(obj);
    }
  }
  
  const newList = filteredList.reduce((acc, obj) => {
    const key = Object.keys(obj).find(key => obj[key] === null);
    obj.question = `Hi, could you please provide your ${key}.`;
    acc.push(obj);
    return acc;
  }, []);
  
  return newList;
}

// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

function isAgeDiverse(list) {
  const allAges = {teens: 0, twenties: 0, thirties: 0, forties: 0, fifties: 0, sixties: 0, seventies: 0, eighties: 0, nineties: 0, centenarian: 0};

  for (const item of list) {
    if (item.age >= 18 && item.age < 20) {
      allAges.teens += 1;
    } else if (item.age >= 20 && item.age < 30) {
      allAges.twenties += 1;
    } else if (item.age >= 30 && item.age < 40) {
      allAges.thirties += 1;
    } else if (item.age >= 40 && item.age < 50) {
      allAges.forties += 1;
    } else if (item.age >= 50 && item.age < 60) {
      allAges.fifties += 1;
    } else if (item.age >= 60 && item.age < 70) {
      allAges.sixties += 1;
    } else if (item.age >= 70 && item.age < 80) {
      allAges.seventies += 1;
    } else if (item.age >= 80 && item.age < 90) {
      allAges.eighties += 1;
    } else if (item.age >= 90 && item.age < 100) {
      allAges.nineties += 1;
    } else if (item.age >= 100 && item.age <= 199) {
      allAges.centenarian += 1;
    }
  }

  if (Object.values(allAges).includes(0)) {
    return false;
  } else {
    return true;
  }
}

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

function countLanguages(list) {
  const result = {};
  
  list.forEach(obj => {
    if (result[obj.language]) {
      result[obj.language] = result[obj.language] + 1;
    } else {
      result[obj.language] = 1;
    }
  })
  
  return result;
}

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

function isSameLanguage(list) {
  let firstLanguage = '';
  
  for (const item of list) {
    firstLanguage = list[0].language;
  }
  
  return list.every(obj => {
    return obj.language === firstLanguage;
  })
}

// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

function findAdmin(list, lang) {
  const githubAdmins = list.filter(obj => {
    if (obj.githubAdmin === 'yes' && obj.language === lang) {
      return obj;
    }
  });

  return githubAdmins;
}

// Invalid Input - Error Handling #1

function getCount(words) {
  let newObj = {vowels: 0, consonants: 0};
  
  try {
    if (typeof words === 'object') {
      return newObj;
    } 
      
    for (let i = 0; i < words.length; i++) {
      if (words[i].match(/[aeiou]/i)) {
        newObj.vowels += 1;
      } else if (words[i].match(/[bcdfghjklmnpqrstvwxyz]/i)) {
        newObj.consonants += 1;
      }
    }
    
    return newObj;

  } catch(error) {
    return newObj;
  } 
}

// Error Throwing - Error Handling #2

function validateMessage(msg) {
  try {
    if (msg === null) {
      throw new ReferenceError('Message is null!');
    } else if (typeof msg !== 'string') {
      throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
    } else if (msg.length > 255 || msg.length === 0) {
      throw new RangeError(`Message contains ${msg.length} characters!`);
    }
      
    if (msg.includes('<') && msg.includes('>')) {
      return false;
    } else if (typeof msg === 'string') {
      return true;
    }
    
  } catch(error) {
    throw error;
  } 
}

// Throw from list - Error Handling #3

function validate(username, password) {
  try {
    username = username.trim();
    password = password.trim();
    
    if (username.length > 12) {
      throw ERRORS.usernameTooLong(username);
    } else if (username.length < 1) {
      throw ERRORS.usernameTooShort(username); 
    } else if (password.match(username)) {
      throw ERRORS.passwordContainsUsername(password);
    } else if (username.match(/[(){}\[\]|;:'"\/?.,<>~=\-+*&^%$@!]/)) {
      throw ERRORS.usernameInvalidCharacters(username);       
    } else if (password.length > 24) {
      throw ERRORS.passwordTooLong(password);
    } else if (password.length < 8) {
      throw ERRORS.passwordTooShort(password);
    } else if (password.match(/[(){}\[\]|;:'"\/?.,<>~=\-+*&^%$@!]/)) {
      throw ERRORS.passwordInvalidCharacters(password);
    } else if (!password.match(/[A-Z]/)) {
      throw ERRORS.passwordNoCapital(password);
    } else if (!password.match(/[0-9]/)) {
      throw ERRORS.passwordNoNumber(password);
    }
    
    return true;
  } catch (error) {
    throw error;
  }
}





