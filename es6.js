// 29-1 ES6 Intro difference between var, Let, and const


// intro
// difference between var let and const

const name='toukir ahmed';
console.log(name);

// 
// name='avi';  // i can't reassigned const variable

//  ~ ~ ~
//  let
//  ~ ~ ~
//  let is block scope
//  let can be redeclared but can be reassigned
//  let must be declared before use
//  let have no hoisting
let age=22;
age=23;
console.log(age);
// let age=24;  // i can't redeclare let variable

//  ~ ~ ~
//  var
//  ~ ~ ~
//  var is function scope
//  var can be redeclared and reassigned
//  var must be declared before use
//  var have hoisting
var job='student';
console.log(job)
var job='teacher';
console.log(job);

//  ~ ~ ~
//  const
//  ~ ~ ~
//  const is block scope
//  const can't be redeclared and reassigned
//  const must be declared before use
//  const have no hoisting
const country='bangladesh';
console.log(country);
// const country='aus';  
// country='usa';
// console.log(country);

//  ~ ~ ~
//  but const -> array and object value can be upgradeable
//  ~ ~ ~
const avi ={
    name:'avi', number:1229, gender:'female', age:24
}

avi.name='toukir+1229'; 
console.log(avi.name);
avi[1]={ name:'avi---uuuuuuuu', number:1229, gender:'female', age:22}
console.log(avi)


// same goes for const
const aviFav=[1229,143,111,783,879,321];
aviFav[2]=999;
console.log(aviFav)
aviFav.push(9999);
console.log(aviFav)