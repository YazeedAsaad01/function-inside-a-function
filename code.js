function fisrtFunction(num1) {
    function secFunction(num2) {
       num2 = Math.floor(Math.random() * num1 * 5);
       return `${num2 + num1} the random number is ${num2}`;
    }
    return `This is the result ${secFunction()}`;
}

console.log(fisrtFunction(5));