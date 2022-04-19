let entry = document.getElementById("display")
let dummy = document.getElementById("display2")

entry.textContent = '';
dummy.textContent = '';
let firstNumber = '';
let secondNumber = '';
let operator;

function keyPress(e){
    entry.textContent += e;
    dummy.textContent = '';
    checkNums();
}

function wipe() {
    entry.textContent = '';
    dummy.textContent = '';
    firstNumber = '';
    secondNumber = '';
    console.log('wipe');
    checkNums();
}

function add(){
    // if (firstNumber != '' && entry != ''){
    //     entry = parseInt(firstNumber) + parseInt(entry);
    // }

    firstNumber = entry.textContent;
    dummy.textContent = entry.textContent;
    entry.textContent = '';
    operator = 'addition';
    
    
    // if (firstNumber != '' && secondNumber != '')
    // {
    //     entry.textContent = firstNumber.textContent;
    //     dummy.textContent = firstNumber.textContent;
    //     console.log(firstNumber.textContent)
    // }
    checkNums();
}

function sub(){
    firstNumber = entry.textContent;
    dummy.textContent = entry.textContent;
    entry.textContent = '';
    operator = 'subtraction';
}

function mult(){
    firstNumber = entry.textContent;
    dummy.textContent = entry.textContent;
    entry.textContent = '';
    operator = 'multiplication';
}

function divide(){
    firstNumber = entry.textContent;
    dummy.textContent = entry.textContent;
    entry.textContent = '';
    operator = 'division';
}



function equals(){
    if (operator == 'addition'){
        if (secondNumber ==''){secondNumber = entry.textContent;}//left off here trying to get the equals button to work after hitting another operator button 
        entry.textContent = parseInt(firstNumber) + parseInt(secondNumber);
        firstNumber = entry.textContent;
        checkNums();
    }
    if (operator == 'subtraction'){
        secondNumber = entry.textContent;
        entry.textContent = parseInt(firstNumber) - parseInt(secondNumber);
    }
    if (operator == 'multiplication'){
        secondNumber = entry.textContent;
        entry.textContent = parseInt(firstNumber) * parseInt(secondNumber);
    }
    if (operator == 'division'){
        secondNumber = entry.textContent;
        entry.textContent = parseInt(firstNumber) / parseInt(secondNumber);
    }
    dummy.textContent = '';
}


function checkNums()
{
    console.log('-----New Button Below-----');
    console.log('Entry: ' + entry.textContent);
    console.log('First: ' + firstNumber);
    console.log('Second: ' + secondNumber);
    console.log('Dummy: ' + dummy.textContent);
}