function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b != 0) {
        return a / b;
    }
    else return "ERROR"
}

let num1 = "";
let operator;
let num2 = "";
let lastButtonClicked = null;

function operate(num2, operator, num1) {
    let result;
    if (operator == "add") {
        result = add(num2, num1)
    }
    else if (operator == "subtract") {
        result = subtract(num2, num1)
    }
    else if (operator == "multiply") {
        result = multiply(num2, num1)
    }
    else if (operator == "divide") {
        result = divide(num2, num1)
    }
    return result;
}

function setDisplay() {
    const display = document.querySelector("#display");
    display.textContent = 0;

    const one = document.querySelector(".number.one")
    one.addEventListener("click", () => {
        num1 += 1
        display.textContent = num1
        lastButtonClicked = "one";
    })

    const two = document.querySelector(".number.two")
    two.addEventListener("click", () => {
        num1 += 2
        display.textContent = num1
        lastButtonClicked = "two";
    })

    const three = document.querySelector(".number.three")
    three.addEventListener("click", () => {
        num1 += 3
        display.textContent = num1
        lastButtonClicked = "three";
    })
    
    const four = document.querySelector(".number.four")
    four.addEventListener("click", () => {
        num1 += 4
        display.textContent = num1
        lastButtonClicked = "four";
    })

    const five = document.querySelector(".number.five")
    five.addEventListener("click", () => {
        num1 += 5
        display.textContent = num1
        lastButtonClicked = "five";
    })

    const six = document.querySelector(".number.six")
    six.addEventListener("click", () => {
        num1 += 6
        display.textContent = num1
        lastButtonClicked = "six";
    })

    const seven = document.querySelector(".number.seven")
    seven.addEventListener("click", () => {
        num1 += 7
        display.textContent = num1
        lastButtonClicked = "seven";
    })

    const eight = document.querySelector(".number.eight")
    eight.addEventListener("click", () => {
        num1 += 8
        display.textContent = num1
        lastButtonClicked = "eight";
    })

    const nine = document.querySelector(".number.nine")
    nine.addEventListener("click", () => {
        num1 += 9
        display.textContent = num1
        lastButtonClicked = "nine";
    })

    const zero = document.querySelector(".number.zero")
    zero.addEventListener("click", () => {
        num1 += 0
        display.textContent = num1
        lastButtonClicked = "zero";
    })    
}

function operatorClick() {

    const add = document.querySelector(".operator.add")
    add.addEventListener("click", () => {
        if (num2 != "") {
            display.textContent = operate(num2,operator,num1);
            num1 = operate(num2,operator,num1);
        }
        operator = "add";
        num2 = num1;
        num1 = "";
        lastButtonClicked = "add";
    })
    
    const subtract = document.querySelector(".operator.subtract")
    subtract.addEventListener("click", () => {
        if (num2 != "") {
            display.textContent = operate(num2,operator,num1);
            num1 = operate(num2,operator,num1);
        }
        operator = "subtract";
        num2 = num1;
        num1 = "";
        lastButtonClicked = "subtract";
    })

    const multiply = document.querySelector(".operator.multiply")
    multiply.addEventListener("click", () => {
        if (lastButtonClicked != "multiply") {
        if (num2 != "") {
            display.textContent = operate(num2,operator,num1);
            num1 = operate(num2,operator,num1);
        }
        operator = "multiply";
        num2 = num1;
        num1 = "";
        lastButtonClicked = "multiply";
    }
    })
    
    const divide = document.querySelector(".operator.divide")
    divide.addEventListener("click", () => {
        if (lastButtonClicked != "divide") {
        if (num2 != "") {
            display.textContent = operate(num2,operator,num1);
            num1 = operate(num2,operator,num1);
        }
        operator = "divide";
        num2 = num1;
        num1 = "";
        lastButtonClicked = "divide";
    }
    })

    const equals = document.querySelector(".operator.equals")
    equals.addEventListener("click", () => {
        if (num1 != "" && num2 != ""){
            display.textContent = operate(num2, operator, num1);
            num1 = operate(num2,operator,num1);
            num2 = "";
            lastButtonClicked = null;
        }
        
    })

    const clear = document.querySelector(".operator.clear")
    clear.addEventListener("click", () => {
        num1 = ""
        num2 = ""
        operator = ""
        display.textContent = 0;
        lastButtonClicked = null;
    })

}

setDisplay();
operatorClick();

