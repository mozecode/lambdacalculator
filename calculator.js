//get values from form
let numberInput = document.getElementById("num1");
let numberInput2 = document.getElementById("num2");

//targets for event listeners on buttons
let add= document.getElementById("add");
let sub= document.getElementById("sub");
let mult= document.getElementById("mult");
let divide = document.getElementById("divide");

//get value functions for each input
function getNumber(){
	let input1= parseInt(numberInput.value);
	return input1;
}

function getNumber2(){
	let input2 = parseInt(numberInput2.value);
	return input2;
}

let userInput = 0;
let userInput2 = 0;

numberInput.addEventListener("change", function(){
	userInput = getNumber();
		console.log ("userInput",userInput);
	})
numberInput2.addEventListener("change", function(){
	userInput2=getNumber2();
	console.log ("userInput2",userInput2);
})

//event listeners for each button
add.addEventListener("click", function(){
	let newSum = operation(userInput, userInput2, sum);
	console.log ("newSum",newSum);
});

sub.addEventListener("click", function(){
	 let newSub = operation(userInput, userInput2, subtract);
	 console.log ("newSub", newSub);
});

mult.addEventListener("click", function(){
	let newMult = operation(userInput, userInput2, multiply);
	console.log ("newMult",newMult);
});

divide.addEventListener("click", function(){
	let newDivi = operation(userInput, userInput2, divi);
	console.log ("newDivi", newDivi);
});

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiply(num1, num2){
 let product= num1 * num2;
 return product;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function sum(num1, num2){
	let sum = num1 + num2;
	return sum;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

 function subtract(num1, num2){
 	let subtraction = num1 - num2;
 	return subtraction;
 }


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divi(num1, num2){
	let quotient= num1 / num2;
	return quotient;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 function operation(num1, num2, funct){
 	let result= funct(num1, num2);
 	return result;
 }