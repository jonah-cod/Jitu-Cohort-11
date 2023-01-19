// //example of an error
// alet("Hey");

// //custom error
// throw "This is a custom error"

// console.log("You made it up to here")


// handling error with try...catch...finally
// let marks
// try {
//       // alet("Hey")
//       let greetings = "%%%"
//       decodeURI(greetings)
// } catch (error) {
//       console.error(error.name)
//       console.error(error.message)
// }finally{
//       console.log("You made it")
// }



// custom error to handle logical errors

let marks = prompt("Enter marks");

function validate(){
      try {
            if(marks<0) throw "The marks are below limit"
      
            if (marks>100) throw "The marks are above limit"
            console.log(marks)
      } catch (error) {
            console.log(error)
      }finally{
           console.log(marks) 
      }

      
}

validate()