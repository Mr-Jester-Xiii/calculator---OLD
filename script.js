const numButtons = document.querySelectorAll(".btn-number");
const opButtons = document.querySelectorAll(".btn-operator");
const display = document.querySelector(".display");
const equalsButton = document.querySelector(".btn-equals");
const clearButton = document.getElementById("clear");

let displayData = "";
let operatorPressed = false;
let equalsPressed = false;
let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;

// Working event listener to populate display with button values

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonValue = button.getAttribute("data-num");
    displayData += buttonValue;
    display.textContent = displayData;
    if (operatorPressed === true) {
      num2 = displayData;
    } else {
      num1 = displayData;
    }
    console.log("num1 is " + num1 + " " + "num2 is " + num2);
  });
});

opButtons.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    let buttonValue = opButton.getAttribute("data-num");
    operator = buttonValue;
    displayData += buttonValue;
    display.textContent = displayData;
    operatorPressed = true;
    displayData = "";
    console.log(operatorPressed);
  });
});

equalsButton.addEventListener("click", () => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  displayData = operate(operator, num1, num2);
  display.textContent = displayData;
  console.log(num1, operator, num2);
});

clearButton.addEventListener("click", () => {
    clearCalc();
    display.textContent = displayData;
});

function addNum(num1, num2) {
  result = num1 + num2;
  return result;
}

function subtractNum(num1, num2) {
  result = num1 - num2;
  return result;
}

function multiplyNum(num1, num2) {
  result = num1 * num2;
  return result;
}

function divideNum(num1, num2) {
  result = num1 / num2;
  return result;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      addNum(num1, num2);
      break;

    case "-":
      subtractNum(num1, num2);
      break;

    case "*":
      multiplyNum(num1, num2);
      break;

    case "/":
      divideNum(num1, num2);
      break;
  }
  return result;
}

function clearCalc() {
  displayData = "";
  operatorPressed = false;
  equalsPressed = false;
  num1 = 0;
  num2 = 0;
  operator = "";
  result = 0;
}

// function test() {
//     num1 = parseFloat(prompt("Number 1", ""));
//     operator = prompt("+, -, * or /");
//     num2 = parseFloat(prompt("Number 2", ""));
//     operate(operator, num1, num2);
// }

// test();
