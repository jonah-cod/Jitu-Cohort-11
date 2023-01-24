
// // Hoisting

// console.log(hoisted);

// var hoisted = "I'm below here";

// // // hoistedFunction()
// // referencedFunc()

// // function hoistedFunction() {
// //       console.log(hoisted + " from a hoited function")
// // }

// // const referencedFunc = function(){
// //       console.log(hoisted + " from a hoited function")
// // }


// // hoisting at function scope

// parentFunction()

// function parentFunction() {
//       hoistedFunction()
//       referencedFunc()
// // declared functions can be hoisted
//       function hoistedFunction() {
//             console.log(hoisted + " from a hoisted function")
//       }
// // referenced functions cannot be hoisted
//       const referencedFunc = function () {
//             console.log(hoisted + " from a hoited function")
//       }
// }


// // parameters
// // default

// function greetings (name="Sir"){
//       console.log(`Hello ${name}, how are you?`);
// }

// greetings("Mary");

// // rest parameters

// function most_params(...args) {
//       console.log(args)
// }

// most_params(23,45,67,3, 76, 67, 54)

// function collectData (Name, id, email, ...more_data ){
//       console.log( Name, id, email, more_data)
// }

// // collectData("John", 33344454, "john@gmail.com", "reading")


// function recursive(i) {

//       if (i >= 10) return i;
//       console.log(i)
//       recursive(i += 1);

// }

// recursive(2)

// example
let company = {

      sales: [

            { name: 'John', salary: 1000 },

            { name: 'Alice', salary: 1600 }],

      development: {

            sites: [

                  { name: 'Peter', salary: 2000 },

                  { name: 'Alex', salary: 1800 }],

            internals: [{ name: 'Jack', salary: 1300 }]
      }
};

// console.log(company.sales.reduce((total, employee)=>total+=employee.salary, 0))

//solution 
function totalSalary(department){
      
      if(Array.isArray(department)){
            return department.reduce((total, employee)=> total + employee.salary, 0);
      }else{
            let total_salary = 0;
            for (const key of Object.values(department)) {
            total_salary += totalSalary(key);
      }
      return total_salary;
      }
}

console.log((totalSalary(company)))