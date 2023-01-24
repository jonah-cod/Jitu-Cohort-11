
// Variable scope
// //1 global - accessedanywhere
// let ans = "I'm good";

// console.log(ans);

// function logger() {
//       console.log(ans + " From the function")
//       function inside_logger() {
//             console.log(ans + " From the inside loger")
//       }
//       inside_logger()
// }

// logger()

// // 2 function scope

// function func() {
//       let greeting = "How are you?";
//       console.log(`This is from function scope ${greeting}`)
//       console.log(`This is from function scope ${ans}`)
//       function inside_func() {
//             let ans = "I'm good";
//             console.log(greeting + "in the function")
//       }

//       inside_func()
// }
// func();

// console.log(greeting)

// // 3. Block scope

// {
//       let under_block = "Can you reach me?"
//       console.log(under_block+ " Yes, from the block");
// }

// console.log(under_block);