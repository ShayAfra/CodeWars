// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.




// solution

//Pretty sure there is an issue with this problems testing. I had the same solution as below but it kept returning errors that were not really errors.
function fourFriends(num){
    return num.length <= 4 && isNaN(num)
  }
  
  function friend(friends){
    return friends.filter(fourFriends)
  }



  //other solutions


//   function friend(friends){
//     return friends.filter(n => n.length === 4)
//   }

// const friend = friends => friends.filter(friend => friend.length == 4);