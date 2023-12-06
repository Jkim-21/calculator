const numberButtons = document.querySelectorAll(".number");
const deleteButton = document.querySelector(".delete");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const previousOperandDisplay = document.querySelector(".previous-operand");
const currentOperandDisplay = document.querySelector(".current-operand");
const decimalButton = document.querySelector(".decimal");

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

equalsButton.addEventListener("click", compute);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
document.addEventListener("keydown", handleKeyboardInput);

function appendNumber(number) {
    if (currentOperandDisplay.textContent === "0" || (previousOperand === "" && previousOperandDisplay.textContent.trim() !== "")) {
        clear();
    }
    if (number === ".") {
        if (currentOperand === "") {
            currentOperand += "0";
        }
        if (currentOperand.includes(".")) {
            return;
        }
    }
    currentOperand += number;
    currentOperandDisplay.textContent = currentOperand;
}

function selectOperation(operation) {
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
    const roundResult = (value) => Math.round(value * 10000) / 10000;
    currentOperandDisplay.textContent = roundResult(result);
    currentOperation = null;
    currentOperand = result;
    previousOperand = "";
}

function clear() {
    currentOperand = "";
    previousOperand = "";
    currentOperation = null;
    currentOperandDisplay.textContent = "0";
    previousOperandDisplay.textContent = previousOperand;
}

function deleteNumber() {
    currentOperand = currentOperand.slice(0, -1);
    currentOperandDisplay.textContent = currentOperand;
}

function handleKeyboardInput(e) {
    if (0 <= e.key && 9 >= e.key || e.key === ".") {
        appendNumber(e.key);
    }
    if (e.key === '+') {
        selectOperation("+");
    }
    if (e.key === "-") {
        selectOperation("−");
    }
    if (e.key === "*") {
        selectOperation("×");
    }
    if (e.key === "/") {
        selectOperation("÷");
    }
    if (e.key === "Backspace") {
        deleteNumber();
    }
    if (e.key === "Enter" || e.key === "=") {
        e.preventDefault()
        compute();
    }
    if (e.key === "Escape") {
        clear();
    }
}