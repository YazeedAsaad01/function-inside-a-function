// Define a function 'fisrtFunction' which takes a parameter 'num1'
function fisrtFunction(num1) {
    // Define a nested function 'secFunction' which takes a parameter 'num2'
    function secFunction(num2) {
        // Generate a random number 'num2' between 0 (inclusive) and 'num1 * 5' (exclusive)
        num2 = Math.floor(Math.random() * num1 * 5);
        // Return a string containing the sum of 'num1' and 'num2' along with the random number 'num2'
        return `${num2 + num1} the random number is ${num2}`;
    }
    // Call 'secFunction' without passing any argument and embed the result in a string
    return `This is the result ${secFunction()}`;
}

// Call 'fisrtFunction' with the argument '5' and output the result to the console
console.log(fisrtFunction(5));
