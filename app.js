const defaultResult = 0;
let currentResult = defaultResult;

let longEntries = [];

addBtn.addEventListener('click', add) // we use no paranthese b/c we only want the browser to execute the function and not the programmer itsel, were giving the address basically
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

let secondNumb = 0;

function getUserInput(){
   return parseInt(userInput.value);
}

function creatAndWriteOutput(operator, resultBefore, calcNumber){
    const calcdescrption = `${resultBefore} ${operator} ${calcNumber}`; 
    outputResult(currentResult, calcdescrption); //from vendor file
}

function writeToLog(operationIdent, prevResult, operationNum, newResult){
    const logEntry = {
        operation: operationIdent,
        prevResult: prevResult,
        number: operationNum,
        result: newResult
    };
    longEntries.push(logEntry);
    console.log(longEntries);
}

function calculateResult (operationType){
    let enteredNumber = getUserInput();
    let initialResult = currentResult;
    let mathOPP;

    if(operationType === 'ADD'){
        currentResult += enteredNumber; 
        mathOPP = '+';
    } else if(operationType === 'SUBTRACT'){
        currentResult -= enteredNumber; 
        mathOPP = '-';
    } else if(operationType === 'MULTIPLY'){
        currentResult *= enteredNumber; 
        mathOPP = '*';
    } else if(operationType === 'DIVIDE' && enteredNumber !== 0){
        currentResult /= enteredNumber; 
        mathOPP = '/';
    } else if(operationType === 'DIVIDE' && enteredNumber === 0){
        creatAndWriteOutput('', "Can't Divide by 0!",'');
        writeToLog('divided by 0', initialResult, enteredNumber, 'undefined');
        return;
    } 
    creatAndWriteOutput(mathOPP, initialResult, enteredNumber);
    writeToLog(operationType, initialResult, enteredNumber, currentResult);
}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}



