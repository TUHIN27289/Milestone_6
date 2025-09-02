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


// ~ ~ ~ 29-2 Function default parameter for not provided values (=) ~ ~ ~
// FOR iNTEGER
function addW(num1,num2){
    const total=num1+num2;
    return total;
}
console.log(addW(10));

function add(num1=0,num2=0){
    const total=num1+num2;
    return total;
}
console.log(add(10));

// FOR STRING
function addName(first, last='avi'){
    const fullName=first+' '+last;
    return fullName;
}
console.log(addName('toukir'));

// for array
function addArray(array=[2,6,1229]){
    return array;
}
console.log(addArray([1229,143,111,783,879,321]));
console.log(addArray());

// for object
function addObj(obj={name:'toukir', age:22, gender:'male'}){
    return obj;
}
console.log(addObj({name:'avi', age:24, gender:'female'}));
console.log(addObj());

// thumb rule of default value,may be useful
// multiply-->1
// subtract/addition-->0
// string=''
// array[]
// object{}

// ~ ~ ~ 29-3 Template string, multiple line string, dynamic string ~ ~ ~
function addition(num1=0,num2=0){
    const total=num1+num2;
    return `sum ${num1} of ${num2} is ${total}`;
}
console.log(addition(10, 20));
const tex=` hi i am toukir ahmed.
i am 22 years old.
i am a student.
avi is my best friend
i love ... so much
my fav num is : 1229
`
console.log(tex);

const tex2=` hi i am toukir ahmed.
i am 22 years old.
i am a student.
avi is my best friend`
console.log(tex2);

// 29-4 Arrow function, multiple parameters, function body =>
//  function declartion
function addition_(num1=0,num2=0){
    const total=num1+num2;
    return total;
}
console.log(addition_(10, 20));
// function expression
// const addition2=function(num1=0, num2=0){
//     const total=num1+num2;
//     return total;
// }

const funExpress=function(num){
    console.log('i am function expression');
    return num*2;
}
console.log(funExpress(10));

// arrow function
const addition2=(num1=0,num2=0)=>{
    const total=num1+num2;
    return total;
}
console.log(addition2(10,20));

const isEven=num=>num%2===0;
console.log(isEven(1229));

const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
console.log(doMath(10,5));

const isBig=(n1,n2)=>(n1>n2)?n1:n2;
console.log(isBig(1229,143777));

const greet=()=> 'good morning toukir ahmed';
console.log(greet());
const getSquare=n=>n*n;
console.log(getSquare(1229));

//  ~ ~ ~29-6 Spread operator, array max, copy arrays ~ ~ ~
const ages=[12,14,16,18,20,22,24,26,28,30];
console.log(ages);
console.log(...ages);  // spread operator


console.log(Math.max(ages));  // wrong way
console.log(Math.max(...ages)); // correct way

const ages2=ages;
console.log(ages2);
ages2.push(32);
console.log(ages);
console.log(ages2);

// copy an array using spread operator
const ages3=[...ages];
console.log(ages3);
ages3.push(34);
console.log(ages);
console.log(ages3);

const ages4=[...ages, 36,38,40];
console.log(ages4);

const ages5=[-1,-2,-3,...ages,42,44,46];
console.log(ages5);

const person={name:'toukir', age:22, job:'student'};
const person2={favperson:'avi',...person,favNum:1229};
console.log(person2);

// 29-7 (advanced) Object and Array Destructuring
// const student={name:'avi', age:24, job:'student', bfName:'toukir', address:'kolabagan', phone:1229, friends:['abul','babul','kabul','dabul']};
const student={name1:'avi', age1:24, job1:'student', bfName:'toukir', address:'kolabagan', phone:1229, friends:['abul','babul','kabul','dabul']};

const{name1, age1, job1, bfName, address, phone, friends}=student;
console.log(name1, age1, job1, bfName, address, phone, friends);
// using asles
const{name1:n, age1:a, job1:j, bfName:b, address:c, phone:p, friends:f}=student;
console.log(n, a, j, b, c, p, f);

const {price}={price:1229, name:'avi', job:'student'};
console.log(price);
const{price1,nam}= {price1:1229, nam:'avi', job:'student'};
console.log(nam)
// destructuring array
const numbers=[12,78,1229,7,9,56,90,32];
const[phy,che,mat,bio,eng,ban]=numbers;
console.log(phy,che,mat,bio,eng,ban);
const[,,m,,,,s]=numbers;
console.log(m,s);

// 29-8 Keys, values, entries, delete, seal, freeze
// keys
const stu={name:'avi', age:24, job:'student', bfName:'toukir', address:'kolabagan', phone:1229, friends:['abul','babul','kabul','dabul']};
const keys=Object.keys(stu);
console.log(keys);

const values=Object.values(stu);
console.log(values);

const entries=Object.entries(stu);
console.log(entries);

// delete
delete stu.phone;
console.log(stu);


// seal
// i can not add or delete any property
// but i can update any property
Object.seal(stu);
stu.age=15;
console.log(stu);

// stu.phone=1229; // i can't add any property
// console.log(stu);

// delete stu.job; // i can't delete any property
// console.log(stu);


// freeze
// i can't add, delete or update any property
Object.freeze(stu);
stu.age=25;
console.log(stu);

// stu.phone=1229; // i can't add any property
// console.log(stu);

// delete stu.job; // i can't delete any property
// console.log(stu);    




//  ~ ~ ~ 29-9 Const object and array can be upgradeable ~ ~ ~

//  ~ ~ ~ way 1
const stu1={name:'avi', age:24, job:'student', bfName:'toukir', address:'kolabagan', phone:1229, friends:['abul','babul','kabul','dabul']};
for(const prop in stu1){
    console.log(prop);
    console.log(stu1[prop]);
}
//  ~ ~ ~ way 2
const key=Object.keys(stu1);
for(const i of key){
    console.log(i);
    console.log(stu1[i]);
}


//  ~ ~ ~ problem ~ ~ ~
// ❓ Problem:

// You are given the following object:

// const user = { name: "John", age: 30, city: "New York" };


// Using object destructuring, extract the name and age properties into separate variables.

const user = { name_: "John", age_: 30, city: "New York" };
const{name_,age_}=user;
console.log(name_,age_);


// ❓ Problem:

// You are given the following array:

// const colors = ["red", "green", "blue"];


// Using array destructuring, extract the first and third elements into variables named firstColor and thirdColor.
const colors = ["red", "green", "blue"];
const[fi,,t]=colors;
console.log(fi , t);

// sayhello function
const sayhello=(st)=>{
    console.log(`hello ${st}`);
}
sayhello('toukir ahmed');
sayhello('avi');
sayhello('world!');


// 
const sname='bangladesh';
const sage=22;
const sjob='student';
const bio_=`${sname} is my fav country
here live a boy, who fall in love with a girl whose age is ${sage}
she is a ${sjob}
`
console.log(bio_)


// ~ ~ ~ module-30
// 30-2 Access Value, nested object, Optional chaining, Dot notation vs bracket notation
const toukir = {
    name:"toukir ahmed",
    age:26,
    job:'cse-engineer',
    1:1229,
    'address-home':{
        city:'birampur',
        country:'bangladesh'
    }
};
console.log(toukir.name);// by dot notation
console.log(toukir['1']); // by bracket notation
console.log(toukir['address-home']);
 console.log(toukir['address-home'].city);
console.log(toukir['address-home'].country);
