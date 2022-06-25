// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer



//my solution------- need to find better testing environment when doing codewars. wasn't able to test to see what was going wrong
function squareDigits(num){
    let squaredNum = ''
    let newNum = num.toString()
    for (let i = 0; i < newNum.length; i++){
      let tempNum = Number(newNum[i])
      Math.pow(tempNum)
      squaredNum += tempNum.toString()
    }
    return Number(squaredNum);
  }




  //closest solution to mine

//   function squareDigits(num){
//     var string = num.toString();
//     var results = [];
//     for (var i = 0; i < string.length; i++){
//         results[i] = string[i] * string[i];
//     }
//     return Number(results.join(''));
// };



//simplest/quickest solution
//function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
// }