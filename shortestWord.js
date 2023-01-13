// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s){
    let shortest = 99;
    let words = s.split(' ')
    for (let word of words){
      if(shortest > word.length){
        shortest = word.length
      }
    }
    return shortest
  }