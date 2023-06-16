function add (x, y) {
    return +x + +y;
}

function subtract (x, y) {
    return +x - +y;
}

function multiply (x, y) {
    return +x * +y;
}

function divide (x, y) {
    return +x / +y;
}

function operate (operator, x, y) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        // its important that it is x, not *
        case 'x':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

function updateNumber (btnText) {
    btnText = btnText.trim();
    if (operator) {
        num2 += btnText;
    } else {
        num1 += btnText;
    }
}

function setOperator (btnText) {
    btnText = btnText.trim();
    operator = btnText;
}

// doMath means that if equal btn is clicked then we compute
function display (doMath=true) {
    if (doMath) {
        screen.textContent = `${operate(operator, num1, num2)}`;
        num1 = operate(operator, num1, num2);
        operator = '';
        num2 = '';
    } else {
        screen.textContent = `${num1} ${operator} ${num2}`;
    }

}

function clearScreen () {
    num1 = '';
    num2 = '';
    operator = '';
    screen.textContent = '0';
}


let screen = document.querySelector('.screen');

let numberBtns = document.querySelectorAll('.btn[data-type="number"]');
let operatorBtns = document.querySelectorAll('.btn[data-type="operator"]');
let resultBtn = document.querySelector('.btn[data-type="result"]');
let clearBtn = document.querySelector('.btn[data-type="clear"]');

let num1 = '', operator = '', num2 = '';

numberBtns.forEach((btn) => btn.addEventListener(
    'click',
    () => {updateNumber(btn.textContent); display(false)}
));
operatorBtns.forEach((btn) => btn.addEventListener(
    'click',
    () => {setOperator(btn.textContent); display(false)}
));
resultBtn.addEventListener('click', () => display(true));
clearBtn.addEventListener('click', clearScreen)
