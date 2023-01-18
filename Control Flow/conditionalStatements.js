// Conditional Statements
//conditional operators ===, <, >, >=, <= ! negator != !==
// 1. if(...)

let marks = 60;
let mark2 = 38;
const pass_mark = 40;

// if(mark2 >= pass_mark) console.log("The student passed!");

// let time = "1200";
// if( time === 1200) console.log("Hey, good afternoon!")
//       //console.log("How's the day going?")

// let morning = 0800;
// if(morning === 0800){
//       console.log("Good morning");
//       console.log("Are you ready for today?")
// }

// if(!(39>=pass_mark))console.log("The student passed!");
// console.log(!(39>=pass_mark))


// let morning = 0801;
// if(morning !== 0800){
//       console.log("Good morning");
//       console.log("Are you ready for today?")
// }

// // if ... else

// if (mark2 >= pass_mark) {
//       console.log("Congrats")
// }else{
//       console.log("You can do better")
// }

// // nested if else
// // grade m >= 40 pass, >= 60 credit, >=80 dist otherways fail
// let grade;
// let marks1 = prompt("Enter marks", 0);

// if (marks1 < 40 && marks1>=0) {
//       grade = "fail"
// }else if(marks1 < 60 && marks1>=40){
//       grade="pass"
// }else if(marks1 < 80 && marks1>=60){
//       grade= "credit"
// }else if(marks1 <= 100 && marks1>=80){
//       grade ="dist"
// }else {
//       console.log("Enter valid marks")
// }

// console.log(grade)

// 3. switch ... case

let time = prompt("Enter marks", 0);
let greetings;

switch(Number(time)){
      case 0800 : greetings = "Good morning";
      break;
      case 1200 : greetings = "Good afternoon";
      break;
      case 1500 : greetings = "Good evening";
      break;
      default : greetings = "Good night"
}

console.log(greetings);