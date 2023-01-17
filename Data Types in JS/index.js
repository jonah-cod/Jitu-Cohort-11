// // Data types
// // 1. primitive data types
// // i) String

// let name = "John Smith";
// console.log(typeof(name));
// // string templating

// console.log(`Hello ${name}`);
// // ii) Numbers

// let age = 25;
// let ages = "25"

// console.log(typeof(Number(ages)))
// console.log(typeof(parseInt(ages)))
// // iii) Bigint
// let big_number = 367788998989988288839009387874;
// console.log(typeof(big_number));

// //iv) boolean

// let is_adult = true;
// let is_child = false;
// console.log(typeof(is_adult));
// console.log(typeof(is_child));

// // v) undefined 
// let first_name;
// console.log(typeof(first_name));

// //vi) Null

// let given_age = null;

// console.log(given_age);

// // Objects Data types
// // i) object
// const person = {
//       first_name: "Jane",
//       last_name: "Doe",
//       age: 40,
//       gender: "female",
//       is_adult: true
// }

// console.log(typeof(person));
// // access properties by dot notation
// console.log(person.first_name)
// // access properties by square brackets
// console.log(person["last_name"])
// console.log(`The full name is ${person.first_name} ${person.last_name}`)

// // mutating (altering) properties

// person.age = 25;
// console.log(`New age is ${person.age}`);
// console.log(person);

// // adding properties to objects

// person.is_admin = true;

// console.log(person)
// // // removing properties from objects
// // // impossible to work around
// // person = {
// //       first_name: "Jane",
// //       age: 40,
// //       gender: "female",
// //       is_adult: true
// // }

// delete person.last_name;
// console.log(person);

// 2 Arrays
//example

const fruits = ["kiwi", "banana", "pears", "apple"]
console.log(fruits[3])
//arrays can store different types of primitive data types
// const other_fruits = ["kiwi", "banana", "pears", "apple", 50, true, null]
// console.log(other_fruits[5])

// //adding items to an array
// console.log(fruits[4]);
// fruits.push("avocado");

// console.log(fruits[4])
// console.log(fruits)

//removing items from an array
console.log(fruits)
fruits.pop();
console.log(fruits[3])

console.log(fruits)


// dynamic nature of data types in JS
let foo;
console.log(typeof(foo))

foo = 40;
console.log(typeof(foo))

foo = "barbel";
console.log(typeof(foo))

foo = true;
console.log(typeof(foo))
