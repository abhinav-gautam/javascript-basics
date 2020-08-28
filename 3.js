//Advanced Arrays

const arr = [1,2,10,5];
const double=[];
arr.forEach( num => double.push(num*2)
	)
console.log(double);

//Map
const mapedArr = arr.map(num => num*2);
console.log(mapedArr);
//Map transforms the array. Must include return.

//Filter 
const filteredArr = arr.filter(num => num>=5);
console.log(filteredArr);

//Reduce 
const reducedArr = arr.reduce((accumulator,num) => { // Accumulator can be written as acc
	return accumulator+num
},0	//Starting value of accumulator
)
console.log(reducedArr);