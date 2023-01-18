// Type coercion (Implicit conversion)

let a = 4;
let b = "4"
let c= 5
// // jS concatenates the two variables
// console.log(a+b);

// console.log(b+a);
// //JS executes from top bottom and from left to right
// console.log(a+c+b);

// console.log(b+c+a);

// // Explicit Conversions
// //1. String Conversions
// a) String();

// let x =45;
// console.log(typeof(x));

// x=String(x)
// console.log(typeof(x))

// //applies to boolean

// let is_adult = true

// console.log(is_adult);

// is_adult=String(is_adult)
// console.log(is_adult)


// //b). ().toString();

// let y = 50;

// console.log(typeof(y))

// y = y.toString();
// console.log(typeof(y))

// console.log(typeof((34).toString()))
// //the same happens to boolean

// let is_child = false;

// is_child = is_child.toString()
// console.log(typeof(is_child))


// 2 Numeric Conversions

// // a) Number()
// let num = "40";
// let num2 = 40;
// let num3 = 40;
// console.log(typeof(num));
// // adding a string to a number
// console.log(num + num2)

// //conversion to number
// num = Number(num);
// console.log(typeof(num))

// //add again
// console.log(num2+num3+num);

// //convert boolean to number
// console.log(`Boolean to number ${Number(true)}`)
// console.log(`Boolean to number ${Number(false)}`)

// // camel casing - used mostly to name functions e.g parseInt
// // snake case - used mostly to name variables e.g is_child
// //b) parseInt()

// let l = 40;
// let m = "40.09"

// console.log(l+m);
// console.log(l+ parseInt(m, 10));

// console.log(parseInt("abc",10));

// // convert a boolean to a number

// console.log(parseInt(true, 2))

// // c) parseFloat()

// let p = "100.09";

// console.log(parseFloat(p))

// //3 Boolean conversions

// //a Boolean()
// // conversion from numbers
// console.log(Boolean(344));
// console.log(Boolean(0));
// console.log(Boolean(-344));

// //conversion from strings
// console.log(Boolean("Good morning"));
// console.log(Boolean("45"));
// console.log(Boolean(""));
// console.log(Boolean(" "));
 // true statements are referred to truthy and false to falsy
// conversion from other types
// console.log(Boolean(undefined))
// console.log(Boolean(null))

// Equality Comparison

console.log(4=="4") // in loose comparison there is type coercion

console.log(4==="4") // in strict there is type coercion

let greeting = "goodnight"
let greetings = "Goodnight"

console.log(greeting == greetings); // results to false - JS is case sensitive
console.log(greeting === greetings); // same results 

console.log(null === undefined)

//always use strict comparison
