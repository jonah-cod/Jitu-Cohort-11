// Loops
//1 for statement

// console.log("statement");

// let fruits = ["pawpaw", "apple", "oranges", "banana", "pears"]

// console.log(fruits)

// for(let i = 1; i<fruits.length; i++){
//       console.log(fruits[i]);
// }

// //2. while loop

// let subjects = [67, 86, 54, 62, 59];
// let i = 0;
// let sum = 0;

// while(i<subjects.length){
//       sum += subjects[i]  //sum = sum + subjects[i]
//       i++
// }

// console.log(sum)

// //3. do...while

// let i =0;

// let fruits = ["pawpaw", "apple", "oranges", "banana", "pears"]

// do{
//       console.log(fruits[i])
//       i++
// } while(i< -fruits.length)

// // 4. for...in loop

// let car = {
//       brand: "Toyota",
//       color: "dark",
//       engineType: "v8"
// }

// for (const key in car) {
//       console.log(car[`${key}`])
// }

// 5. for...of statement

// let fruits = ["pawpaw", "apple", "oranges", "banana", "pears"];

// for(const item of fruits){
//       console.log(item)
// }

//6. break;

// for(let i=1; i<10; i++){

//       console.log(i)
//       if(i%4 === 0){
//             console.log(`Four is divisible by: ${i}`)
//             break;
//       }

// }

// //example 2

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log('Outer loops: ', x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log('Inner loops: ', z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

// //7. continue

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }

//example 2 with label

let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if ((j % 2) === 0) {
      continue checkj;
    }
    console.log(j, ' is odd.');
  }
  console.log('i = ', i);
  console.log('j = ', j);
}
