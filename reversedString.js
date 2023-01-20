// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
    let split = str.split('')
    let reversed = split.reverse()
    let joined = reversed.join('')
    return joined
  }     