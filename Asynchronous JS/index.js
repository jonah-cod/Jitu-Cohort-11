
// // Disadvantage of blocking mode(synchronous JS)
// console.log("first");

// for (let i = 0; i <= 1000; i++) {
//       console.log(i===1000);
      
// }

// console.log("third");

// //implementation of asynchronous mode
// // 1 Callbacks

// console.log("first")
// setTimeout(()=>{
//       console.log("second")
// }, 5000)

// console.log("third")

// // challenge // callback hell

// console.log("first")
// setTimeout(()=>{
//       console.log("second")
//       setTimeout(() => {
//             console.log("third")
//             setTimeout(() => {
//                   console.log("four")
//             }, 2000);
//       }, 3000);
// }, 5000)

// console.log("fifth");


// implement 2. promises

function fulfillLater(name){
      return new Promise((resolve, reject)=>{
           if(!name.trim()){
            reject("name is empty");}
           setTimeout(() => {
            resolve(name)
           }, 5000);
            
      })
}

function fulfillPromise(greeting){
      return new Promise((resolve, reject)=>{
           if(!greeting.trim()){
            reject("greeting is empty");}
           resolve(greeting)
            
      })
}



// fulfillLater("fulfilled").then((res)=>{
//       console.log(res)
//       fulfillPromise("Promise").then(res=>{
//             console.log(res)

//       })

// }).catch(err=>console.error(err))

// 3 async await 

async function logData(){
      try {
            let name = await fulfillLater("John");
            let greeting  = await fulfillPromise("Good afternoon.");


            console.log(name, greeting)
      } catch (error) {
            console.log(error)
      }
      
}

logData()
console.log("first")
