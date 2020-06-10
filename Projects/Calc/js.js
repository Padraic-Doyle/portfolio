var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eightBtn = document.getElementById('calc-eight');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');
var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');


var displayValElement = document.getElementById('calc-display-val');
var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorsBtns = document.getElementsByClassName('calc-btn-operator');

var displayVal = '0';
var pendingVal;
var evalStringArray = []; //Javascript eval funstion

let updateDisplay = (e) => {
    var btnText = e.target.innerText;


    if (displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;

}


var performOperation = (e) => {
    var operator = e.target.innerText;

    switch (operator) {

        case '+':
            pendingVal = displayVal;
            displayVal = '';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+')
            break;

        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-')

            break;

        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*')

            break;

        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/')

            break;

        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(''));
            displayValElement.innerHTML = evaluation;
            evalStringArray = [];
            displayVal = '0';
            break;
        default:
            break;
    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplay);


}
for (let i = 0; i < calcOperatorsBtns.length; i++) {
    calcOperatorsBtns[i].addEventListener('click', performOperation, false);

}

clear = () => {
    displayVal = '';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerText = '0';
}

clearBtn.addEventListener('click', clear);


backspaceBtn.onclick = () => {
    let lengthOfDisplay = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplay - 1);
    if (displayVal === '')
        displayVal = '0';
    displayValElement.innerText = displayVal;
}

decimalBtn.onclick = () => {
    if (!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerText = displayVal;
}