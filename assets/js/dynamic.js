const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }

}

const buttons = document.querySelectorAll(".button");
for (const button of buttons) {
    button.addEventListener('click', function(event) {
 
        // mendapatkan objek elemen yang diklik
        const target = event.target;
    
        if(target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if (target.classList.contains('negtaive')) {
            inverseNumber();
            updateDisplay();
            return;
        }
        if (target.classList.contains('equals')) {
            performCalculator();
            updateDisplay();
            return;
        }
        if (target.classList.contains('operator')) {
            handleOpertaor(target.innerText);
            updateDisplay();
            return;
        }
    
        inputDigit(target.innerText);
        updateDisplay()
    });
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOpertaor(operator) {
    if (!calculator.waitingForSecondNumber) {
            calculator.operator = operator;
            calculator.waitingForSecondNumber = true;
            calculator.firstNumber = calculator.displayNumber;
    } else {
        alert('Operator sudah ditetapkan!');
    }
}

function performCalculator() {
    if(calculator.firstNumber == null || calculator.operator == null){
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;

}

function inputDigit(digit) {
    if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
        calculator.displayNumber = digit;
    } else {
        if (calculator.displayNumber === '0') {
            calculator.displayNumber = digit;
        } else {
            calculator.displayNumber += digit;
        }
    }
}





















