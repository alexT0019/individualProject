//Query Selector
const btn = document.querySelectorAll('.calculatorBtn');
const displayScreen = document.querySelector('.displayScreen');
const opBtn = document.querySelectorAll('.calculatorOperatorBtn');
const ACBtn = document.querySelector('.calculatorACBtn');
const eqBtn = document.querySelector('.calculatorEqualBtn');

//Change display to numbers clicked on
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        if (displayScreen.innerHTML == '0' && btn[i].value == "."){
            //if display number is 0 and user clicked "."
            displayScreen.append((btn[i].value));
        } else if (displayScreen.innerHTML == '0'){
            //if display number is 0, just change the number to avoid numbers starting with 0
            displayScreen.innerHTML = `${btn[i].value}`;
        } else {
            displayScreen.append((btn[i].value));
        }
    });
}

//AC
ACBtn.addEventListener("click", () => {
    displayScreen.innerHTML = '0';
})

//operators +-*/
let tempNumber;
let operator;
for(let i = 0; i < opBtn.length; i++){
    opBtn[i].addEventListener("click", () => {
        tempNumber = displayScreen.innerHTML;
        displayScreen.innerHTML = '0';
        operator = opBtn[i].value;
    })
}

//Equal Btn
eqBtn.addEventListener("click", () => {
    let num1 = Number(tempNumber);
    let num2 = Number(displayScreen.innerHTML);
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
        break;
        case '-':
            result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
        break;
        case '/':
            result = num1 / num2;
        break;
        default:
            result = 'ERROR';
    }
    //Rounding number
    if (result < 0.00001 && String(result).length > 8) {
        //if result = 0.*, toPrecision() does not count 0 as a digit
        //-1 digit to fit the display screen size
        displayScreen.innerHTML = result.toPrecision(1);
    } else if (result < 0.0001 && String(result).length > 8){
        displayScreen.innerHTML = result.toPrecision(2);
    } else if (result < 0.001 && String(result).length > 8){
        displayScreen.innerHTML = result.toPrecision(3);
    } else if (result < 0.01 && String(result).length > 8){
        displayScreen.innerHTML = result.toPrecision(4);
    } else if (result < 0.1 && String(result).length > 8){
        displayScreen.innerHTML = result.toPrecision(5);
    } else if (result < 1 && String(result).length > 8){
        displayScreen.innerHTML = result.toPrecision(6);
    } else if (String(result).length > 8) {
        //round the number to fit the display screen size
        displayScreen.innerHTML = result.toPrecision(7);
    } else {
        //Return the number normally when the number ends with 0 after decimal
        //to avoid sth like 2.300000
        displayScreen.innerHTML = result;
    }
})