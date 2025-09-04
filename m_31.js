// 31-1 Module Overview, Primitive and non-primitive data type

// Primitive data types: Number, String, Boolean, Null, Undefined, Symbol
// Non-primitive data types: Object, Array, Function
// primitive
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
let i = function() { return "Hello"; };
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
total(5, );
total(5, undefined);
total( 10);
total(6,9)
console.log('value of function call : ',total1(5, 10));
console.log('value of function call : ',total(5, 10));

const phone={
    name:'phone',
    brand:'Apple',
    model:'iPhone 13',
    year:2021
}
console.log(phone.color);//undefined
const favNum=[2,8,9,45,3,2,45,12]
delete favNum[1];
console.log('after deleteing array index',favNum[1]);//undefined
console.log(favNum[61]);//undefined
console.log('type of undefined:', typeof undefined);

// null is an object
console.log('type of null :', typeof null);


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

