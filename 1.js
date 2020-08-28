//let and const

const player = "Bob"; //it can't be reassigned
let skill = 80;
let power = true;

if (skill<90) {
	let power=false;
	console.log("inside",power);
}
console.log("outside",power);

const obj = {     //it can't be changed
	name: "Jack",	//but property values can be changed
	age: 45,
	gender: "male"
}

//Destructuring
const {name, gender} = obj;
let {age} = obj;

//object properties
const player = "ryan";
const obj2 = {
	[player]:"rayark",
	[2+3]: "asd"
}

const a = "Axe";
const b = "Hammer";
const c = "Cutter";

const obj3 = {
	a,b,c
}

//Template Strings
const bio = `My name is ${name}, age is ${age} and i am ${gender} `

//Default Arguments
function fun(name="Abhinav",age=19 ,gender="male") {
	const bio2 = `My name is ${name}, age is ${age} and i am ${gender} `;
}

//Symbol
let sym1 = Symbol()
let sym2 = Symbol("asd")
let sym3 = Symbol("asd") 	//All are unique

//Arrow Function

const add = (a,b) => a+b;