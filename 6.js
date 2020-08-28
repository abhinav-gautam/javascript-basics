//ES8
//Text Padding
"Abhinav".padStart(10)
"Abhinav".padEnd(10)

//Trailing Commas
const fun = (
	a,
	b,
	c,
	d,
	) => {console.log(a)}
fun(1,2,3,4,)

//Object Traversing
const obj ={
	a: "abhinav",
	b: "ball",
	c: "cat",
	d: "dogo"
}

//Earlier Method
Object.keys(obj).forEach(key=> console.log(key,obj[key]))

//Now
Object.values(obj).forEach(value=> console.log(value))
Object.entries(obj).forEach(entry=> console.log(entry))