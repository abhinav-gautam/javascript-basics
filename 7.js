//Advanced Loops
let basket = ["mango","banana","lichi"]

let detailedBasket={
  mango:10,
  banana:12,
  lichi:50
}

//for of loop
//Iterating - Array, String
for (item of basket){
  console.log(item)
}

//for in loop
//Enumertaing - Objects
for (item in detailedBasket){
  console.log(item,detailedBasket[item])
}