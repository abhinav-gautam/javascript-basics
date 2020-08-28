//Advanced Functions
//Closures
const first = () =>{
	const greet = "HI";
	const second = () => {
		alert (greet);
	}
	return second;
}
const newFun = first();
newFun;

//A function ran, a function executed, it's never going to execute again. But its going to remeber that there are references to those variables
// so the child scope always has access to parent scope but parent scope dosent has access to child scope variables.

//Currying
const multiply = (a,b) => a*b;
const curriredMultiply = (a) => (b) => a*b; 
curriredMultiply(5)(6); //Result: 30
//Converting a function with multiple arguments to take one at a time

//Compose
const compose = (f,g) => (a) => f(g(a));  	//Cascading two functions
const sum = (num) => num+1;
compose(sum,sum)(5); 	//Result: 7

// Function Purity
//  Deterministic --> Always produces the same results given the same inputs
//  No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
