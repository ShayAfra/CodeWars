// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



//solution

function highAndLow(numbers){
    let highest = 0
    let lowest = 100
    let numString = ''
    let tempNum = ''
    for (let i = 0; i < numbers.length; i++){
      if(numbers[i] != ' '){
        if(numbers[i] == '-'){
                  if ((Number(numbers[i+1])* -1) < lowest){
          lowest = (numbers[i+1] * -1)
                  }
        }
         if(numbers[i+1] != ' '){
          tempNum = `${numbers[i]}${numbers[i+1]}`
          
        } else {
          tempNum = `${numbers[i]}`
        }
          if(Number(tempNum) < lowest){
            lowest = Number(tempNum)
          }
          if (Number(tempNum) > highest){
            highest = Number(tempNum)
          }
         }
        }
      }
    numString = `${highest} ${lowest}`
    return numString
    }
  
        
     