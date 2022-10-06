const { AssertionError } = require("chai")

function isFive(num) {
  if(num !== 5){
  return false
} else {
  return true
}
}



function isOdd(num) {

  if(typeof num !== 'number'){
    throw new Error('Error')
  }

else {
  if(num % 2 !== 0){
    return true
  } else {
    return false
  }


  }

  
}



// function isOdd(num) {
// try{ 
// if(typeof num === 'number'){

//   if(num % 2 !== 0){
//     return true
//   } else {
//     return false
//   }
// }
//   else{
//     throw new Error("Error")
//   }
// } catch (e) {
//   console.log(e.message);
// }
// }



function myRange(min, max, step = 1) {
  let newArr = [];
  if (min > max) {
    return newArr
  }
  else {
    for (let i = min; i <= max; i += step) {
      newArr.push(i)
    }
    return newArr
  }
}



module.exports = { isFive, isOdd, myRange };