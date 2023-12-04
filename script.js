const numberButtons = document.querySelectorAll(".number");
const deleteButton = document.querySelector(".delete");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const previousOperandDisplay = document.querySelector(".previous-operand");
const currentOperandDisplay = document.querySelector(".current-operand");

let currentOperand = "";
let previousOperand = "";
let currentOperation = undefined;

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        appendNumber(numberButton.textContent);
    });
});

operationButtons.forEach(operationButton => {
    operationButton.addEventListener("click", () => {
        selectOperation(operationButton.textContent);
    });
});


function appendNumber(number) {
    if (currentOperandDisplay.textContent === "0") {
        currentOperand = "";
    }
    currentOperand += number;
    currentOperandDisplay.textContent = currentOperand;
}

function selectOperation(operation) {
    if (currentOperand !== "" && currentOperation === undefined) {
        previousOperand = currentOperand;
        currentOperation = operation;

        previousOperandDisplay.textContent += `${currentOperand} ${operation}`;

        currentOperand = "";
        compute();
    }
}

function compute() {
    if (currentOperand === undefined) {
        return;
    }

}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operator(num1, num2, operator) {

}