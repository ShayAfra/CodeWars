// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:


// Words in your solution should be left-aligned.


//my code
function mirror(text){
    let arrText = text.split('')
    let revArr = arrText.reverse()
    let revString = revArr.join('')
    return revString
  }
//the solution requires **** around it which I am unsure how to do. lets check the solutions



//best solutions

// function mirror(s){
//     let a = s.split(' ');
//     let m = Math.max(...a.map(x=>x.length));
//     a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
//     return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
//   }

//   function mirror(text){

//     var words = text.split(/\s+/)
//     ,  maxlen = Math.max(...words.map(w => w.length))
//     , padding = ' '.repeat(maxlen)
//     ,  endcap = '*'.repeat(maxlen + 4)
    
//     , reverse = word => word.split('').reverse().join('')
//     ,     pad = word => (word + padding).slice(0, maxlen);
    
    
//     words = words.map(word => '* ' + pad(reverse(word)) + ' *');
//     words.unshift(endcap);
//     words.push(endcap);
    
//     return words.join("\n");
    
//   }