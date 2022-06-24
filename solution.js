let result;
let number1;
let number2;
const operator = prompt("Select operation : \nEnter 1 for addition, \n2 for subtraction, \n3 for multiplication, \n4 for division");


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
        console.log(`number1 = ${number1}`)
        console.log(`number2 = ${number2}`)
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
        console.log(`number1 = ${number1}`)
        console.log(`number2 = ${number2}`)
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
        console.log(`number1 = ${number1}`)
        console.log(`number2 = ${number2}`)
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
        console.log(`number1 = ${number1}`)
        console.log(`number2 = ${number2}`)
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    default:
        console.log("Invalid Entry")
        break;
}
