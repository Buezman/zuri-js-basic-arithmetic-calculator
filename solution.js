let result;
let number1;
let number2;
const operator = prompt("Select operation : Enter 1 for addition, 2 for subtraction,3 for multiplication,4 for division");

const choice = [1,2,3,4]

while (!choice.includes(operator)) {
    alert("Enter a valid choice number: Enter 1 for addition, 2 for subtraction,3 for multiplication,4 for division")
    const operator = prompt("Select operation : Enter 1 for addition, 2 for subtraction,3 for multiplication,4 for division");

    switch(operator) {
        case '1':
            number1 = parseFloat(prompt('Enter first number: '));
            while (isNaN(number1)) {
                alert("invalid entry, please enter a number");
                number1 = parseFloat(prompt('Enter first number: '));
            }
            number2 = parseFloat(prompt('Enter second number: '));
            while (isNaN(number2)) {
                alert("invalid entry, please enter a number");
                number2 = parseFloat(prompt('Enter first number: '));
            }
            result = number1 + number2;
            console.log(`${number1} + ${number2} = ${result}`);
            break;
    
        case '2':
            number1 = parseFloat(prompt('Enter first number: '));
            while (isNaN(number1)) {
                alert("invalid entry, please enter a number");
                number1 = parseFloat(prompt('Enter first number: '));
            }
            number2 = parseFloat(prompt('Enter second number: '));
            while (isNaN(number2)) {
                alert("invalid entry, please enter a number");
                number2 = parseFloat(prompt('Enter first number: '));
            }
            result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result}`);
            break;
    
        case '3':
            number1 = parseFloat(prompt('Enter first number: '));
            while (isNaN(number1)) {
                alert("invalid entry, please enter a number");
                number1 = parseFloat(prompt('Enter first number: '));
            }
            number2 = parseFloat(prompt('Enter second number: '));
            while (isNaN(number2)) {
                alert("invalid entry, please enter a number");
                number2 = parseFloat(prompt('Enter first number: '));
            }
            result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            break;
    
        case '4':
            number1 = parseFloat(prompt('Enter first number: '));
            while (isNaN(number1)) {
                alert("invalid entry, please enter a number");
                number1 = parseFloat(prompt('Enter first number: '));
            }
            number2 = parseFloat(prompt('Enter second number: '));
            while (isNaN(number2)) {
                alert("invalid entry, please enter a number");
                number2 = parseFloat(prompt('Enter first number: '));
            }
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
            break;
    }
    break;
}
