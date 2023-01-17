// // Our first function

// function firstFunction (){
//       let a = 5;
//       let b = 4;
//       return a*b;
// }

// // let result = firstFunction();
// // console.log(result)

// console.log(firstFunction())

// // passing parameters to functions

// function firstFunction (year_of_birth, current_year){
//       let age = current_year - year_of_birth
//       return age;
// }

// // let result = firstFunction(2000, 2023);
// // console.log(result)
// console.log("Your age is " + firstFunction(2000, 2023))


// // Different ways to declare JS functions
// // 1. function declaration --- refer

// // 2. anonymous functions

// // function(){
// //       // code block
// //       let now = new Date;
// //       console.log(now.getDate())
// // }

////in order make sense of anynomous function we'll look into th next way to declare functions

////ways to use anonymous functions
//// i assign it to a variable
            // let today =  function(){
            //             // code block
            //             let now = new Date;
            //             return(now.getFullYear())
            //       }
            //       console.log(today())

//// ii using anonymous functions as a parameter
      // setTimeout(function() {
      //       console.log("This was executed after five seconds")
      // }, 5000);

//// iii 3 self-calling functions

// ( function() {
//       // code block
//       console.log("Todays date");
// } )();


// 4 function expressions 

let sum = function(a, b){
      return a+b;
}

console.log(sum(5, 10))


// 5 arrow functions 
//syntax
// ()=>{
//       //block code 
// }

let average = (total, count)=>{
      return total/count;
}

console.log(average(100, 5))

// arrow function as self calling function

// (()=>{
//       document.write("This's from self calling arrow func" + 200/5);
// })()

// arrow function as parameter
setTimeout(() => {
      console.log("this's from arrow function as a parameter")
}, 2000);
