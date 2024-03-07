let buffer = '0';
const screen = document.querySelector(".screen");
let previousOperator;
let runningTotal = 0;


function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function rerender(){
    screen.innerText = buffer;
}

function handleNumber(number){
    if(buffer==='0'){
        buffer = number;
    } else {
        buffer += number;
    }
}
function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            break;
        case 'k':
            if(buffer.length === 1){
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            } break;
        case '=':
            if(previousOperator === null){
                return;
            } 
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = ""+runningTotal;
            runningTotal = 0;
            break;
        case "+":
        case 'x':
        case '/':
        case '-':
            handleMath(symbol);
            break;
    }
}

function handleMath(value){
    if(buffer === '0'){
        //do nothing
        return;
    } 

    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer
    } else if(previousOperator === '-'){
        runningTotal -= intBuffer;
    } else if(previousOperator === '/'){
        runningTotal /= intBuffer;
    } else if (previousOperator === 'x'){
        runningTotal *= intBuffer;
    }
}


function init(){
    document.querySelector('.calc-buttons')
    .addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    })
}

init();