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
        console.log("add")
        return add(num1,num2);
    }

    else if (op === "-"){
        console.log("subtract")
        return subtract(num1,num2);
    }

    else if (op === "*"){
        console.log("multiply")
        return multiply(num1,num2);
    }

    else if (op === "/"){
        console.log("divide")
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


        if((item.id >= 0 || item.id <= 9) && number2 === -2){
            screen.innerText += item.id;
            number1 = screen.innerText;
        }

        else if (item.id >= 0 || item.id <= 9) {

            if(equalBool === true){
                screen.innerText = "";
                number1 = item.id;
                number2 = -2;
                operator = "";
                equalBool = false;
                screen.innerText = item.id
            }

            else{

                if(count === 0){
                    screen.innerText = "";
                }
                screen.innerText += item.id;
                number2 = screen.innerText;
                count++;
            }

        }

        if(item.id === "*" || item.id === "/" || item.id === "+" || item.id === "-"){
            if(number2 === -1) {
                operator = item.id;
                number2 = 0;
                equalBool = false;
            }
            
            if(number2 !== -2) {

                count = 0;
                screen.innerText = operate(number1, operator, number2)
                operator = item.id;
                number2 = -1;
                number1 = screen.innerText;
            }

            else {
                operator = item.id;
                number2 = 0;
                equalBool = false;
            }
        }

        if(item.id === "=" && number1 >= 0 && number2 >= 0){
            count = 0;
            screen.innerText = operate(number1, operator, number2)
            number2 = -1;
            number1 = screen.innerText;
            equalBool = true;
        }

        if(item.id === "clear"){
            screen.innerText = "";
            number1 = 0;
            number2 = -2;
            operator = "";
            equalBool = false;
        }

        if(item.id === ".") {
            if(!String(number2).includes(".") && number2 >= 0){
                    screen.innerText += item.id;
                    number2 = screen.innerText;
            }

            else if (!String(number1).includes(".")) {
                screen.innerText += item.id;
                number1 = screen.innerText;
            }
        }

        if(item.id === "backspace"){
            // if(number2 >= 0) {
                screen.innerText.slice(0,-1);
            // }
        }
    });
  });