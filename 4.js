// Advanced Objects
// Reference Types
let obj1={
	value:10
}
let obj2= obj1;
let obj3={
	value:10
}
obj1===obj2;	//true
obj1===obj3;	//false

//Context
console.log(this)	//Window

let obj4={
	a:function () {
		console.log(this);	//Obj4
	}
}

//Instantiation
class Player{
	constructor(name,type){
		this.name=name;
		this.type=type;
	}
	introduce(){
		console.log(`Hi! I am ${this.name} and I am ${this.type}`);
	}
}
class Wizard{
	constructor(name,type){
		super(name,type)
	}
	play(){
		console.log(`Hi I am Wizard of type ${this.type}`);
	}
}

const wiz1 = new Wizard("Abhinav","Warlord")
const wiz2 = new Wizard("Ansh","Hacker")

//Cloning Object

//Shallow Cloning
let obj5 = {
	a:"a",
	b:"b",
	c:"c" 
}
let clonedObj = Object.assign({},obj5);		//Object.assign(target,source)
console.log(clonedObj);

let clonedObj2 = {...obj5}	//Spread Method


//Deep CLoning
let obj5 = {
	a:"a",
	b:"b",
	c:"c",
	deep:{
		text:"Copy Me"
	} 
}
let clonedObj = Object.assign({},obj5);		//Can't clone inner object
let clonedObj2 = JSON.parse(JSON.stringify(obj5));
obj5.deep.text="Haha"
console.log(clonedObj);
console.log(clonedObj2);
