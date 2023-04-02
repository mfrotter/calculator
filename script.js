const button = document.getElementsByTagName("button");
const buttonsArray = [...button];
const screen = document.getElementById("screen");

let number1 = 0;
let operator = ""
let number2 = -2;
let count = 0;
let equalBool = false;

  function operate(num1, op, num2) {
    if (op === "+"){
        return add(num1,num2);
    }

    else if (op === "-"){
        return subtract(num1,num2);
    }

    else if (op === "*"){
        return multiply(num1,num2);
    }

    else if (op === "/"){
        return divide(num1,num2);
    }

    else{
        return "";
    }
}

function add(a,b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a,b) {
    a = Number(a);
    b = Number(b);
    return a - b;
}

function multiply(a,b) {
    a = Number(a);
    b = Number(b);
    return a * b;
}

function divide(a,b) {
    a = Number(a);
    b = Number(b);

    if (b === 0){
        return "You can't divide by 0!";
    }
    return a / b;
}

buttonsArray.forEach((item) => {
    item.addEventListener("click", function () {


        if((item.value >= 0 || item.value <= 9) && number2 === -2){
            screen.innerText += item.value;
            number1 = screen.innerText;
        }

        else if (item.value >= 0 || item.value <= 9) {

            if(equalBool === true){
                screen.innerText = "";
                number1 = item.value;
                number2 = -2;
                operator = "";
                equalBool = false;
                screen.innerText = item.value
            }

            else{

                if(count === 0){
                    screen.innerText = "";
                }
                screen.innerText += item.value;
                number2 = screen.innerText;
                count++;
            }

        }

        if(item.value === "*" || item.value === "/" || item.value === "+" || item.value === "-"){
            if(number2 === -1) {
                operator = item.value;
                number2 = 0;
                equalBool = false;
            }
            
            if(number2 !== -2) {

                count = 0;
                screen.innerText = operate(number1, operator, number2)
                operator = item.value;
                number2 = -1;
                number1 = screen.innerText;
            }

            else {
                operator = item.value;
                number2 = 0;
                equalBool = false;
            }
        }

        if(item.value === "=" && number1 >= 0 && number2 >= 0){
            count = 0;
            screen.innerText = operate(number1, operator, number2)
            number2 = -1;
            number1 = screen.innerText;
            equalBool = true;
        }

        if(item.value === "clear"){
            screen.innerText = "";
            number1 = 0;
            number2 = -2;
            operator = "";
            equalBool = false;
        }

        if(item.value === ".") {
            if(!String(number2).includes(".") && number2 >= 0){
                    screen.innerText += item.value;
                    number2 = screen.innerText;
            }

            else if (!String(number1).includes(".")) {
                screen.innerText += item.value;
                number1 = screen.innerText;
            }
        }

        if(item.value === "backspace"){
            // if(number2 >= 0) {
                screen.innerText.slice(0,-1);
            // }
        }
    });
  });