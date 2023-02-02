// // 1. key/property shorthand

// let first_name = "John";
// let last_name = "Smith";

// const person ={
//       first_name,
//       last_name
// }

// console.log(person)

// //2.  implicit return

let arr = [234,45,56,643]

// let sum= arr.reduce((total, item)=> total+item);
// console.log(sum)

// //3. Module export/ import

// import  reduceArrays, {string } from "./exports.js";

// let sum2 = reduceArrays(arr);
// console.log(`Value ${string} ${sum2}`)

// // 4. method definition shorthand
// //instead of:
// let obj={
//       a: function(e,f){},
//       b:function(e,f){}
// }

// // we have 

// let objNew={
//       a(c,d){console.log(c, d)},
//       b(e,f){}
// }

// objNew.a(45, 67)

// // so objNew.a() calls the method expecting parameters d and c

// // 5. destructing

// let anotherObj = {a:4, b:78, c:8};

// // let a =anotherObj.a;
// // let b= anotherObj.b;
// // es6 version
// let {a, b, c, f} = anotherObj

// console.log(a, b, c, f)

// // destructuring arrays
// function returnArr(arr2){
// ;
// return arr2}

let arr2 = [45, 56, 60]

let [x, y, z] = arr2;

// console.log(x, y, z)

// 6. spread operater
// spread arrays

console.log(...arr2)

const combinedArray = [...arr, ...arr2]
console.log(...combinedArray)

//spread arguments
let funct = (...args)=>{
      console.log(...args)
}

funct(x, y, z)

//spread objects

let names = {
      first_name: "John",
      last_name: "Smith"
}

let info = {
      gender: "Male",
      age: 34
}

const person = {...names, info}

console.log(person)

// 7. optional chaining
// calling undefined function

function functn(){
      return thh;
}

// console.log(functn?.())

// object optional chaining

console.log(person?.year)