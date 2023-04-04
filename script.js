const button = document.getElementsByTagName("button");
const buttonsArray = [...button];
const screen = document.getElementById("screen");
const operatorBtn = document.querySelectorAll('.operator');

let number1 = [false, 0];
let operator = ""
let number2 = [false, 0];
let count = 0;
let equalBool = false;
screen.innerText= 0;


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
    return Math.round((a + b) * 10000) / 10000;
}

function subtract(a,b) {
    a = Number(a);
    b = Number(b);
    return Math.round((a - b) * 10000) / 10000;
}

function multiply(a,b) {
    a = Number(a);
    b = Number(b);
    return Math.round(a * b * 10000) / 10000;
}

function divide(a,b) {
    a = Number(a);
    b = Number(b);

    if (b === 0){
        return "You can't divide by 0!";
    }
    return Math.round(a / b * 10000) / 10000;
}

buttonsArray.forEach((item) => {
    item.addEventListener("click", function () {

        if((item.value >= 0 || item.value <= 9) && number1[0] === false){
            screen.innerText = item.value;
            number1[1] = screen.innerText;
            number1[0] = true;
        }



        else if((item.value >= 0 || item.value <= 9) && number2[0] === false){
            if(equalBool === true){
                screen.innerText = "";
                number1[1] = item.value;
                number2[0] = false;
                operator = "";
                equalBool = false;
                screen.innerText = item.value
            }
            
            else {
                screen.innerText += item.value;
                number1[1] = screen.innerText;
            }
        }

        else if (item.value >= 0 || item.value <= 9) {

                if(count === 0){
                    screen.innerText = "";
                }
                screen.innerText += item.value;
                number2[1] = screen.innerText;
                count++;
                operatorBtn[0].classList.remove('active');
                operatorBtn[1].classList.remove('active');
                operatorBtn[2].classList.remove('active');
                operatorBtn[3].classList.remove('active');

        }

        if(item.value === "*" || item.value === "/" || item.value === "+" || item.value === "-"){
            if(number2[0] === false) {
                operator = item.value;
                number2[0] = true;
                equalBool = false;
                this.classList.add('active');

            }
            
            else if(number2[0] !== false) {

                count = 0;
                screen.innerText = operate(number1[1], operator, number2[1])
                operator = item.value;
                number1[1] = screen.innerText;
                this.classList.add('active');
            }

        }

        if(item.value === "=" && number2[0] === true){
            count = 0;
            screen.innerText = operate(number1[1], operator, number2[1])
            number2[0] = false;
            number1[1] = screen.innerText;
            equalBool = true;
            operatorBtn[0].classList.remove('active');
            operatorBtn[1].classList.remove('active');
            operatorBtn[2].classList.remove('active');
            operatorBtn[3].classList.remove('active');
        }

        if(item.value === "clear"){
            screen.innerText = 0;
            number1[0] = false;
            number2[0] = false;
            operator = "";
            count = 0;
            equalBool = false;
            operatorBtn[0].classList.remove('active');
            operatorBtn[1].classList.remove('active');
            operatorBtn[2].classList.remove('active');
            operatorBtn[3].classList.remove('active');
        }

        if(item.value === ".") {
            if(!String(number2[1]).includes(".") && number2[0] === true){
                    screen.innerText += item.value;
                    number2[1] = screen.innerText;
            }
            
            else if (!String(number1[1]).includes(".")) {
                screen.innerText += item.value;
                number1[1] = screen.innerText;
            }
 
        }

        if(item.value === "plusOrMinus") {
            if (number1[0] === true && number2[0] === false){
                number1[1] *= -1;
                screen.innerText = number1[1];

            }

            else if(number1[0] === true && number2[0] === true){
                number2[1] *= -1;
                screen.innerText = number2[1];
            }
        }

        if(item.value === "%") {
            if (number1[0] === true && number2[0] === false){
                number1[1] /= 100;
                screen.innerText = number1[1];

            }

            else if(number1[0] === true && number2[0] === true){
                number2[1] /= 100;
                screen.innerText = number2[1];
            } 
        }

    });
  });