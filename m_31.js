// 31-1 Module Overview, Primitive and non-primitive data type

// Primitive data types: Number, String, Boolean, Null, Undefined, Symbol
// Non-primitive data types: Object, Array, Function
// primitive
// import * as x from 'casper'
let a = 10;
let b = "Hello";
let c = true;
let d = null;
let e = undefined;
let f = Symbol("id");
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//non-primitive
let g = { name: "John", age: 30 };
let h = [1, 2, 3];
let i = function () {
  return "Hello";
};
console.log(g);
console.log(h);
console.log(i());

// 31-2 Null Vs Undefined, different ways you will get undefined
function total(a, b) {
  console.log(a, b);
  // return a + b;
}
function total1(a, b) {
  console.log(a, b);
  return a + b;
}
total(5);
total(5, undefined);
total(10);
total(6, 9);
console.log("value of function call : ", total1(5, 10));
console.log("value of function call : ", total(5, 10));

const phone = {
  name: "phone",
  brand: "Apple",
  model: "iPhone 13",
  year: 2021,
};
console.log(phone.color); //undefined
const favNum = [2, 8, 9, 45, 3, 2, 45, 12];
delete favNum[1];
console.log("after deleteing array index", favNum[1]); //undefined
console.log(favNum[61]); //undefined
console.log("type of undefined:", typeof undefined);

// null is an object
console.log("type of null :", typeof null);

/*
🔍 null vs undefined

| Feature         | undefined                                              | null                                                   |
|-----------------|--------------------------------------------------------|--------------------------------------------------------|
| Meaning         | A variable has been declared but not assigned a value | A variable is explicitly set to "nothing" or "empty"   |
| Type            | undefined (primitive type)                            | object (weirdly — historical bug in JS)                |
| Set by          | JavaScript engine                                     | Developer (manually set)                               |
| Use case        | Something is not yet defined                          | Something is intentionally empty                       |
| Common sources  | Uninitialized variables, missing function returns,    | Manually clearing a value (e.g., myVar = null)         |
|                 | missing object keys                                   |                                                        |
*/

let data;
data = 0;
data = ""; //empty string is false
data = " "; // has an white space
data = "0";
data = false;
data = true;
data = null;
data = {};
data = [];
data = [7];
data = true;
data = -0;
data = undefined;
data = NaN;
data = 9;
data = -9;
data = function missAVI() {};
console.log("type of data:", typeof data);
console.log("value of data:", data);
if (data) {
  console.log(data, "data is truthy");
} else {
  console.log(data, "data is falsy");
}

// if i need to capture the falsy values to go inside if block
// use logical not
if (!data) {
  console.log(data, "Inside if with falsy value");
}

//capture all positive value
// use double not !!
if (data === true) {
  console.log("only true inside the double not");
}

/*
🔍 Different Truthy and Falsy Values in JavaScript

📌 Falsy Values (only 7 in JavaScript):
These values are considered false when used in a boolean context.

- false
- 0
- -0
- 0n        // BigInt zero
- ""        // Empty string
- null
- undefined
- NaN

Example:
  if (!value) {
    // This block runs if value is falsy
  }

📌 Truthy Values:
All other values are considered true, including:

- true
- Any non-zero number (e.g., 1, -1, 3.14)
- Any non-empty string (e.g., "hello", "0")
- Objects and arrays (even if empty) → {}, []
- Functions
- Dates
- Infinity and -Infinity

Example:
  if (value) {
    // This block runs if value is truthy
  }
*/

/*
🔍 Difference Between NOT (!) and Double NOT (!!) in JavaScript

📌 1. Single NOT (!)
- The `!` operator **negates** a truthy or falsy value.
- It **converts** the value to a boolean, then **flips** it.

Examples:
  !true         // false
  !false        // true
  !123          // false (123 is truthy)
  !"hello"      // false (non-empty string is truthy)
  !0            // true  (0 is falsy)
  !undefined    // true

📌 2. Double NOT (!!)
- The `!!` operator **converts any value to its actual boolean equivalent**.
- First `!` converts it to boolean and inverts it.
- Second `!` inverts it back — result is a **pure boolean** (true or false).

Examples:
  !!123         // true
  !!""          // false
  !!null        // false
  !!{}          // true
  !!NaN         // false

✅ Use `!!value` when you want to **force a value into boolean form**.
*/

// ~ ~ ~  31-4 double equal (==) vs triple equal (===), implicit conversion
// double equal (==) vs triple equal (===), implicit conversion
const aa = 5;
const bb = "5";

console.log(a == b); // true (value is equal, type is ignored)
console.log(a === b); // false (value and type are both considered)

// triple
console.log(2 === 2); // true
console.log(2 === "2"); // false
console.log(2 === 2n); // false
console.log(2n === 2); // false
console.log(2n === 2n); // true
console.log(2n === "2"); // false
console.log(1 === 2); // false
console.log(true === 1); //false
console.log(false === 0); // false
console.log(false === 0n); // false
console.log(false === "0"); // false
console.log(false === NaN); // false
console.log(false === null); // false
console.log(false === undefined); // false
console.log(false === function () {}); // false
console.log(false === Symbol()); // false
console.log(false === BigInt(0)); // false
console.log(false === -0); // false
console.log(false === ""); // false
console.log([] === "");

/*
🔍 Difference Between == and === in JavaScript

📌 == (Loose Equality)
- Compares **values** after **type coercion**.
- If the types are different, JavaScript tries to convert them to the same type before comparing.



📌 === (Strict Equality)
- Compares **both value and type** without coercion.
- No type conversion is done — if types differ, result is false.

✅ Best Practice:
Always use `===` to avoid unexpected behavior from type coercion.
Use `==` only when you're **intentionally** relying on type conversion.
*/

// double ==
console.log("~ ~ ~     ==  ~ ~ ~");
console.log(2 == "2"); // true
console.log(2 == 2n); // true
console.log(2n == 2); // true
console.log(2n == "2"); // true
console.log(1 == 2); // false
console.log(true == 1); // true
console.log(false == 0); // true
console.log(false == 0n); // true
console.log(false == "0"); // true
console.log(false == NaN); // false
console.log(false == null); // false
console.log(false == undefined); // false
console.log(false == function () {}); // false
console.log(false == Symbol()); // false
console.log(false == BigInt(0)); // true
console.log(false == -0); // true
console.log("~ ~ ~", false == ""); // true

// ~ ~ ~  31-5 Block scope global scope, simple understanding of Hoisting

function hoistingExample() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
  console.log(doMath(8, 9));

  function dosub(a, b) {
    return a - b;
  }
}

hoistingExample();
// console.log(x);  // i don't have the access of x outside block or that function

function doMath(a, b) {
  return a + b;
}

// dosub(8,5); //i have no access to function dosub cause it's defined inside another function,and i  am accessing outside block

//~ ~ ~ 31-6 (optional) Callback function and pass different functions
function greet(callback, age, name) {
  console.log("Age is:", age);
  if (age > 18) {
    callback(name.toUpperCase());
  } else {
    callback(name);
  }
}

function callback(name) {
  console.log("Hello, " + name + "!");
}
//  callback('AVI')

greet(callback, 100,'toukirr'); // Output: Hello, Alice!


// callback example
function pakhibhai(callback_1,patro, patri){
  if(patro){
    console.log('patro ase', patro);
    callback_1(`${patri} is calling you`);

  }
  else{
    console.log('patro nai');
  }
}
function calling1229(name){
  console.log("Hello, " + name + "!");
}
calling1229('toukir');

pakhibhai(calling1229,'toukir','avi');

//31-7 (advanced) function arguments pass by reference pass by value
//all primitive data type are passed by value-->number,string,boolean,null,undefined,symbol

//pass by value
 function passByValue(a, b) {
  a = 10;
  b = 20;
  const sum = a + b;
  return sum;
}
const num1 = 5;
const num2 = 15;
const result = passByValue(num1, num2);
console.log("Result of passByValue:", result);
//all non-primitive data type are passed by reference-->object,array,function
//pass by reference
function balancecalculator(p1, p2) {
  p1.balance += 500; // Add 500 to player1's balance
  p2.balance += 300; // Add 300 to player2's balance
  return p1.balance + p2.balance;

}


const player1 = { name: "Toukir", balance: 100 };
const player2 = { name: "Avi", balance: 150 };
console.log("Before balancecalculator:");
console.log(player1.balance); // { name: "Toukir", balance: 100 }
console.log(player2.balance); // { name: "Avi", balance: 150 }
const totalBalance = balancecalculator(player1, player2);
console.log("After balancecalculator:");
console.log(player1.balance); // { name: "Toukir", balance: 600 }
console.log(player2.balance); // { name: "Avi", balance: 450 }
console.log("Total Balance:", totalBalance); // Total Balance: 1050