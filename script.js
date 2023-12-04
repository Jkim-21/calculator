const numberButtons = document.querySelectorAll(".number");
const deleteButton = document.querySelector(".delete");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const previousOperandDisplay = document.querySelector(".previous-operand");
const currentOperandDisplay = document.querySelector(".current-operand");

let currentOperand = "";
let previousOperand = "";
let currentOperation = null;

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

equalsButton.addEventListener("click", () => {
    compute();
    
});

function appendNumber(number) {
    if (currentOperandDisplay.textContent === "0") {
        currentOperand = "";
    }
    currentOperand += number;
    currentOperandDisplay.textContent = currentOperand;
}

function selectOperation(operation) {
    if (currentOperand === "") {
        return;
    }

    if (currentOperation !== null) {
        compute();
    }
    
    if (previousOperandDisplay.textContent.trim() === "") {
        previousOperandDisplay.textContent += `${currentOperand}`;
    }
    previousOperand = currentOperandDisplay.textContent;
    currentOperation = operation;
    currentOperand = "";
}

function compute() {
    if (currentOperand === "" || currentOperation == null) {
        return;
    }

    previousOperandDisplay.textContent += ` ${currentOperation} ${currentOperand}`;

    let result = null;
    let previousOperandFloat = parseFloat(previousOperand);
    let currentOperandFloat = parseFloat(currentOperand);

    switch(currentOperation) {
        case "+":
            result = previousOperandFloat + currentOperandFloat;
            break;
        case "−":
            result = previousOperandFloat - currentOperandFloat;
            break;
        case "×":
            result = previousOperandFloat * currentOperandFloat;
            break;
        case "÷":
            result = previousOperandFloat / currentOperandFloat;
            break;
        default:
            break;
    }
    currentOperandDisplay.textContent = result;
    currentOperation = null;
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