

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');
const addition = document.querySelector('#addition');
const subtraction = document.querySelector('#subtraction');
const multiplication = document.querySelector('#multiplication');
const division = document.querySelector('#division');
const equals = document.querySelector('#equals');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
// const backspace = document.querySelector('#backspace');
const screen = document.querySelector('#screen');
const jonah = document.querySelector('#jonah');

let operator;
let condition = false;
let arrayA = [];
let arrayB = [];
let solution;
let firstOperand;
let secondOperand;
let decimalToggle = false;
let answer = false;

one.addEventListener('click', pressNumber);
two.addEventListener('click', pressNumber);
three.addEventListener('click', pressNumber);
four.addEventListener('click', pressNumber);
five.addEventListener('click', pressNumber);
six.addEventListener('click', pressNumber);
seven.addEventListener('click', pressNumber);
eight.addEventListener('click', pressNumber);
nine.addEventListener('click', pressNumber);
zero.addEventListener('click', pressNumber);
point.addEventListener('click', pressDecimal);
clear.addEventListener('click', clearDisplay);
//backspace.addEventListener('click', backspaceFunction);
addition.addEventListener('click', pressOperator);
subtraction.addEventListener('click', pressOperator);
multiplication.addEventListener('click', pressOperator);
division.addEventListener('click', pressOperator);
equals.addEventListener('click', pressEqual);


function add(a, b) {
    solution = a + b;
    screen.textContent = solution;
}
function subtract(a, b) {
    solution = a - b;
    screen.textContent = solution;
}
function multiply(a, b) {
    solution = a * b;
    screen.textContent = solution;
}
function divide(a, b) {
    solution = a / b;
    screen.textContent = solution;
}
function operate(operator, a, b) {
    if (NaN) {
        return '';
    }
    if (operator == '+') {
        return add(a, b);
    }
    if (operator == '-') {
        return subtract(a, b);
    }
    if (operator == 'x') {
        return multiply(a, b);
    }
    if (operator == '/') {
        return divide(a, b);
    }

}

function jonahToggle() {
    console.log("it worked");
    if (jonah.style.display = 'none') {
        jonah.style.display = 'block';
        screen.appendChild(jonah);
    } else {
        jonah.style.display = 'none';
        screen.appendChild(jonah);
    }
}

function clearDisplay() {
    screen.innerHTML = "";
    arrayA = [];
    arrayB = [];
    firstOperand = 0;
    secondOperand = 0;
    condition = false;
    decimalToggle = false;

    console.log("1st  : " + firstOperand + typeof (firstOperand));
    console.log("oprtr: " + operator);
    console.log("2nd  : " + secondOperand + typeof (secondOperand));
}

// function backspaceFunction(){
//     if (arrayA.length >= 1){
//         arrayA.split("");
//         arrayA.splice(0, arrayA.length-1);
//         arrayA.join("");
//         console.log(arrayA);
//         return arrayA;
//     } else if (arrayB.length >= 1){
//         arrayB.splice(0, arrayB.length-1);
//         console.log(arrayB);
//         return arrayB;
//     } else {
//         return;
//     }
// }

function pressNumber() {
    let div = document.createElement('div');
    div.textContent = this.textContent;

    if (answer) {
        screen.innerHTML = "";
    }

    if (!condition) {
        arrayA.push(this.textContent);
        firstOperand = parseFloat(arrayA.join(""));
    } else {
        arrayB.push(this.textContent);
        secondOperand = parseFloat(arrayB.join(""));
    }
    answer = false;
    screen.appendChild(div);

    console.log("1st  : " + firstOperand + typeof (firstOperand));
    console.log("oprtr: " + operator);
    console.log("2nd  : " + secondOperand + typeof (secondOperand));
}

function decimalAddRemove() {
    if (decimalToggle) {
        point.classList.add('decimalToggle');
        point.classList.remove('button');
        point.disabled = true;
    } else {
        point.classList.remove('decimalToggle');
        point.classList.add('button');
        point.disabled = false;
    }
}

function pressDecimal() {
    let div = document.createElement('div');
    div.textContent = this.textContent;

    if (answer) {
        screen.innerHTML = "";
    }

    if (!condition) {
        arrayA.push(this.textContent);
        firstOperand = parseFloat(arrayA.join(""));
    } else {
        arrayB.push(this.textContent);
        secondOperand = parseFloat(arrayB.join(""));
    }
    answer = false;
    screen.appendChild(div);
    decimalToggle = true;

    decimalAddRemove();
}


function pressOperator() {

    if (answer) {
        operator = this.textContent;
        firstOperand = solution;
        secondOperand = 0;
        condition = true;
        decimalToggle = false;

        console.log("1st  : " + firstOperand + typeof (firstOperand));
        console.log("oprtr: " + operator);
        console.log("2nd  : " + secondOperand + typeof (secondOperand));

        screen.innerHTML = "";
    } else if (firstOperand && secondOperand) {
        pressEqual();
        
        if (operator == '+') {
            firstOperand += secondOperand;
        } else if (operator == '-') {
            firstOperand -= secondOperand;
        } else if (operator == 'x') {
            firstOperand *= secondOperand;
        } else if (operator == '/') {
            firstOperand /= secondOperand;
        }
        operator = this.textContent;
        secondOperand = 0;
        condition = true;
        decimalToggle = false;

        console.log("1st  : " + firstOperand + typeof (firstOperand));
        console.log("oprtr: " + operator);
        console.log("2nd  : " + secondOperand + typeof (secondOperand));

    } else {
        operator = this.textContent;

        condition = true;
        decimalToggle = false;

        decimalAddRemove();

        console.log("1st  : " + firstOperand + typeof (firstOperand));
        console.log("oprtr: " + operator);
        console.log("2nd  : " + secondOperand + typeof (secondOperand));

        screen.innerHTML = "";
    }
    return operator, firstOperand, condition;
}

function pressEqual() {

    console.log("1st  : " + firstOperand + typeof (firstOperand));
    console.log("oprtr: " + operator);
    console.log("2nd  : " + secondOperand + typeof (secondOperand));

    if (operator == '/' && secondOperand == 0) {
        screen.innerHTML = "";
        jonahToggle();
        return;
        
    } else {
        operate(operator, firstOperand, secondOperand);
        arrayA = [];
        arrayB = [];
        condition = false;
        answer = true;
        decimalToggle = false;
        decimalAddRemove();
    }
}




/*
option 1: creat div elements with a single number inside each one when a button is pressed
option 2: create an array with the appropriate numbers and display that array

NOTES: the above commented code isnt working because the second operand doesnt hold a value until the equal
function is invoked. find a way to assign the second operand (and the first operand) inside the press number
function. then find a way to disable the decimal button or put a div over the top of it.

TODO:   make decimals work                     DONE
        allow multiple operators                DONE
        compress extraneous code to functions
        configure decimalToggle                DONE

    console.log("1st  : " + firstOperand + typeof(firstOperand));
    console.log("oprtr: " + operator);
    console.log("2nd  : " + secondOperand + typeof(secondOperand));

*/



/*
8/26/2020:

clean up code, remove console logs, add functions where applicable
add backspace button,
don't let divide by zero be a thing
add keyboard support
*/