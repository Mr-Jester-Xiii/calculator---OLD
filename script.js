const numButtons = document.querySelectorAll(".btn-number");
const opButtons = document.querySelectorAll(".btn-operator");
const display = document.querySelector(".display");
const equalsButton = document.querySelector(".btn-equals");
const clearButton = document.getElementById("clear");
const decimalButton = document.querySelector(".btn-decimal");
const deleteButton = document.getElementById("delete");


let displayData = "";
let operatorPressed = false;
let equalsPressed = false;
let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;

// Buttons to fill display with button values

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonValue = button.getAttribute("data-num");
    displayData += buttonValue;
    display.textContent = displayData;
    if (operatorPressed === true) {
      num2 = displayData;
    // } else if (equalsPressed === true) {
    //   num1 = 0;
    //   displayData = "";
    //   num2 = displayData;
    //   display.textContent = displayData;
    } else {
      num1 = displayData;
    }
  });
});

// Buttons to select operator, and fill button values

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

//

equalsButton.addEventListener("click", () => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
    if (operator === "/" && num2 === 0) {
      display.textContent = "Nice try!";
    } else {
      displayData = operate(operator, num1, num2);
      display.textContent = displayData;
      console.log(num1, operator, num2);
      num1 = displayData; // Test for after equals button presses
      equalsPressed = true;
    }
  });
  
 

decimalButton.addEventListener("click", () => {
  if (displayData.includes(".")) {
    // Do nothing
  } else {
    let buttonValue = decimalButton.getAttribute("data-num");
    displayData += buttonValue;
    display.textContent = displayData;
  }
})

// ^^^ This alters the string and the display, but does not update the number.
 

clearButton.addEventListener("click", () => {
  clearCalc();
  display.textContent = displayData;
});

deleteButton.addEventListener("click", () => {
  displayData = displayData.substring(0, displayData.length-1);
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
  return Math.round((result + Number.EPSILON) * 10000 ) / 10000; // Round to 4 decimal places
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
