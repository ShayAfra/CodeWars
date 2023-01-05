function cyclops(n) {
    let bin = n.toString(2).split('0');
   return (bin.length == 2 &&  bin[0] == bin[1])
 }