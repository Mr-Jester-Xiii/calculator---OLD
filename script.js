const buttons = document.querySelectorAll('.btn-number, .btn-operator');
const display = document.querySelector('.display');
const equalsButton = document.querySelector('.btn-equals');

let displayData = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonValue = button.getAttribute('data-num');
        displayData += buttonValue;
        display.textContent = displayData;
    })
})

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         if (num1 = null) {
//             num1 = button.getAttribute('data-num');
//         } else 
//     })
// })

equalsButton.addEventListener('click', () => {

} )

function addNum(num1, num2) {
    return(num1 + num2);
}

function subtractNum(num1, num2){
    return(num1 - num2);
}

function multiplyNum(num1, num2){
    return(num1 * num2);
}

function divideNum(num1, num2){
    return(num1 / num2);
}

function operate(operator, num1, num2){
    switch(operator) {
        case "+":
            addNum(num1, num2);
            break;

        case "-":
            subtractNum(num1, num2);
            break;

        case "*":
            multiplyNum(num1, num2);
            break

        case "/":
            divideNum(num1, num2);
    }
}

function test() {
    num1 = parseFloat(prompt("Number 1", ""));
    operator = prompt("+, -, * or /");
    num2 = parseFloat(prompt("Number 2", ""));
    operate(operator, num1, num2);
}

// test();
