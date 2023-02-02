function reduceArrays(arr){
      let sum= arr.reduce((total, item)=> total+item);
      return sum
}
let string = 'export from another file'
export {reduceArrays as default, string}

