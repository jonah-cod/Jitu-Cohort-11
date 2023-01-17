/* alert("This is JavaScript")

document.write("The input is on the document")*/

// Declaring variables

let marks;
marks = 56;
console.log(marks);
//variables can be reassigned
marks = 60;
console.log(marks);


const pass_mark = 40;
console.log(pass_mark);
// constants cannot be reassigned
// pass_mark = 80;
// console.log(pass_mark);


//arithmetic operators
//addition
let maths = 54;
let computer = 70;

let total = maths + computer;

console.log(total)
console.log("Hello" + " " + "John")

// subtraction
let age;
const year_of_birth = 2000;
let current_year = 2023;

age = current_year-year_of_birth;
console.log(age + " years")

//multiplication

let length = 12;
let width = 6;
let area = length * width;
console.log(area);

// division
let total_marks = 300;
let total_subjects = 5;

let average = total_marks/total_subjects;

console.log("This is the average " + average);

//exponential 

let value = 4;
console.log(value**2);

// modulus
let value1 = 10;
let value2 = 5;

console.log(value1%value2)
console.log(value1%3);

//increment
let value3 = 10;
let value4 = ++ value3
console.log("Increment " + value4)


//increment
let value5 = 10;
let value6 = -- value5
console.log("Decrement " + value6)



//Assignment operators
//=

let p = 100;
let y = p;
console.log(y);

//+=

let x = 200;
x+=100;  // x = x +100;
console.log(x);

//-=
let z = 200;
z-=100;  // x = x -100;
console.log(z);

//*=
let l = 4;
l*=2;
console.log(l);

// /=

let k=10;
k /=2;
console.log(k);

// %=

let b = 20;
b %=3;
console.log(b);

// %=

let c = 3;
c **=3;
console.log(c);
