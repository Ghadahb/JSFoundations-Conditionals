const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const firstNumber = prompt("Please enter first number:  ");
const secondNumber = propmt("Please enter second number:");
const operation = prompt("Please enter an operation (+, -, *, /)");

let result;
if(isNaN(parseInt(firstNumber)) || isNaN(parseInt(secondNumber))){
    console.log("not a number")
}else{
    if (operation == '+') {
        result = parseInt(firstNumber) + parseInt(secondNumber);       
    console.log(firstNumber+ " " + operation+ " "+ secondNumber +" = "+ result);
    }
    else if (operation == '-') {
        result = parseInt(firstNumber) - parseInt(secondNumber);
        console.log(firstNumber+ " " + operation+ " "+ secondNumber +" = "+ result);
    }
    else if (operation == '*') {
        result = parseInt(firstNumber) * parseInt(secondNumber);
        console.log(firstNumber+ " " + operation+ " "+ secondNumber +" = "+ result);
    }
    else if (operation == '/') {
        result = parseInt(firstNumber) / parseInt(secondNumber);
        console.log(firstNumber+ " " + operation+ " "+ secondNumber +" = "+ result);
    }
    else{
        console.log("Operation not valid");
    }
}
