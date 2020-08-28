//Object Spread Operator
const animals = {
	tiger:23,
	lion:5,
	monkey:1,
	bird:25
}

//const{tiger, ... rest} = animals; // Destructuring

const arr = [1,2,3,4]
const sum =(a,b,c,d)=> a+b+c+d
sum (...arr)

function objectSpread (p1, p2, p3){
	console.log(p1)
	console.log(p2)
	console.log(p3)
}
const {tiger, monkey , ... rest} = animals
objectSpread(tiger, monkey , rest)