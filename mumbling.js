// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.







//my solution

function accum(s) {
    let strOut = []
    let tempString = s.split('')
    for (let i = 0; i < tempString.length; i++){
      strOut.push(tempString[i].toUpperCase() + tempString[i].repeat(i).toLowerCase())   
      }
    return strOut.join('-')
  }




//shortest/simplest solutions
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }



//   function accum(s) {
//     return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
//   }