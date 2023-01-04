const button = document.querySelectorAll(".calc-button")
const sliderBall = document.querySelector(".slider-ball")
const body = document.body
const themeSlider = document.querySelector(".theme-slider")
const input = document.querySelector(".input")
const blueBg = document.querySelectorAll(".blue-bg ")
const redBg = document.querySelector(".red-bg")
const result =document.querySelector(".result")
const resultP = document.querySelectorAll(".result > p")
const resultPrevious = document.querySelector(".previous-entry")
const resultOutput = document.querySelector(".result-output")
const logo = document.querySelector(".logo")
const inputButtons = document.querySelectorAll(".input > button")
const whiteP = document.querySelectorAll(".white-p")
const themeNumbers = document.querySelectorAll(".theme-numbers > span")
const themeSwitcherP = document.querySelector(".theme-switcher-p")
const spanTwo = document.querySelectorAll(".span-two")

const numberBtn = document.querySelectorAll(".number-btn")
const signsBtn = document.querySelectorAll(".sign-btn")
const deleteBtn = document.querySelector(".delete-btn")
const resetBtn = document.querySelector(".reset-btn")
const equalBtn = document.querySelector(".equal-btn")

const oneBtn = document.querySelector(".one");

for(let i=0;i<button.length;i++) {
    button[i].addEventListener('mousedown', (e) => {
        if (e.button===0) {
            button[i].style.marginTop = "3px";
        }
    })
    button[i].addEventListener('mouseup', (e) => {
        if (e.button===0) {
            button[i].style.marginTop = "0px";
        }
    })
}
resetBtn.addEventListener('mousedown', (e) => {
    if (e.button===0) {
        resetBtn.style.top = "3px";
        resetBtn.style.height = "46.75px";
    }
})
resetBtn.addEventListener('mouseup', (e) => {
    if (e.button===0) {
        resetBtn.style.top = "0px";
        resetBtn.style.height = "49.75px";
    }  
})
equalBtn.addEventListener('mousedown', (e) => {
    if (e.button===0) {
        equalBtn.style.top = "3px";
        equalBtn.style.height = "46.75px";
    }
})
equalBtn.addEventListener('mouseup', (e) => {
    if (e.button===0) {
        equalBtn.style.top = "0px";
        equalBtn.style.height = "49.75px";
    }  
})

let countButtonHomeClicks = 0;

function themeSwitcher() {
    countButtonHomeClicks += 1;
    if(countButtonHomeClicks === 1) {
        sliderBall.style.transform = "translateX(152%)";

        body.classList.add("second-theme-body");
        themeSlider.classList.add("second-theme-theme-slider");
        sliderBall.classList.add("second-theme-slider-ball");
        result.classList.add("second-theme-result");
        for(let i=0;i<blueBg.length;i++){
            blueBg[i].classList.add("second-theme-blue-bg");
        }
        redBg.classList.add("second-theme-red-bg");
        for(const result of resultP){
            result.classList.add("second-theme-logo");
        }
        input.classList.add("second-theme-input");
        logo.classList.add("second-theme-logo");
        for(const button of inputButtons){
            button.classList.add("second-theme-input-buttons");
        }
        for(let i=0;i<whiteP.length;i++){
            whiteP[i].classList.add("second-theme-white-p");
        }
        for(const span of themeNumbers){
            span.classList.add("second-theme-logo");
        }
        themeSwitcherP.classList.add("second-theme-logo");
    }
    if(countButtonHomeClicks === 2) {
        sliderBall.style.transform = "translateX(308%)";

        body.classList.remove("second-theme-body");
        themeSlider.classList.remove("second-theme-theme-slider");
        sliderBall.classList.remove("second-theme-slider-ball");
        result.classList.remove("second-theme-result");
        for(let i=0;i<blueBg.length;i++){
            blueBg[i].classList.remove("second-theme-blue-bg");
        }
        redBg.classList.remove("second-theme-red-bg");
        for(const result of resultP){
            result.classList.remove("second-theme-logo");
        }
        input.classList.remove("second-theme-input");
        logo.classList.remove("second-theme-logo");
        for(const button of inputButtons){
            button.classList.remove("second-theme-input-buttons");
        }
        for(let i=0;i<whiteP.length;i++){
            whiteP[i].classList.remove("second-theme-white-p");
        }
        for(const span of themeNumbers){
            span.classList.remove("second-theme-logo");
        }
        themeSwitcherP.classList.remove("second-theme-logo");

        body.classList.add("third-theme-body");
        themeSlider.classList.add("third-theme-theme-slider");
        sliderBall.classList.add("third-theme-slider-ball");
        result.classList.add("third-theme-result");
        for(let i=0;i<blueBg.length;i++){
            blueBg[i].classList.add("third-theme-blue-bg");
        }
        redBg.classList.add("third-theme-red-bg");
        redBg.classList.add("third-theme-p");
        for(const result of resultP){
            result.classList.add("third-theme-logo");
        }
        input.classList.add("third-theme-input");
        logo.classList.add("third-theme-logo");
        for(const button of inputButtons){
            button.classList.add("third-theme-input-buttons");
        }
        for(let i=0;i<whiteP.length;i++){
            whiteP[i].classList.add("third-theme-white-p");
        }
        for(const span of themeNumbers){
            span.classList.add("third-theme-logo");
        }
        themeSwitcherP.classList.add("third-theme-logo");
    }
    if(countButtonHomeClicks === 3) {
        sliderBall.style.transform = "translateX(0%)";

        body.classList.remove("third-theme-body");
        themeSlider.classList.remove("third-theme-theme-slider");
        sliderBall.classList.remove("third-theme-slider-ball");
        result.classList.remove("third-theme-result");
        for(let i=0;i<blueBg.length;i++){
            blueBg[i].classList.remove("third-theme-blue-bg");
        }
        redBg.classList.remove("third-theme-red-bg");
        redBg.classList.remove("third-theme-p");
        for(const result of resultP){
            result.classList.remove("third-theme-logo");
        }
        input.classList.remove("third-theme-input");
        logo.classList.remove("third-theme-logo");
        for(const button of inputButtons){
            button.classList.remove("third-theme-input-buttons");
        }
        for(let i=0;i<whiteP.length;i++){
            whiteP[i].classList.remove("third-theme-white-p");
        }
        for(const span of themeNumbers){
            span.classList.remove("third-theme-logo");
        }
        themeSwitcherP.classList.remove("third-theme-logo");
    }
    if(countButtonHomeClicks === 4) {
        countButtonHomeClicks = 0;
        themeSwitcher();
    }
}

sliderBall.addEventListener('click', themeSwitcher);

// FUNKCIONALNOST 1

// let firstValue = "";
// let isFirstValue = false;
// let secondValue = "";
// let isSecondValue = false;
// let sign = "";
// let resultValue = 0;

// for(let i=0;i<numberBtn.length;i++) {
//     numberBtn[i].addEventListener('click', (e) => {
//         let atr = e.target.getAttribute('value');
//         console.log(atr);
//         if(isFirstValue === false) {
//             getFirstValue(atr);
//         }
//         if(isSecondValue === false) {
//             getSecondValue(atr);
//         }
//     })
// }

// function getFirstValue(el) {
//     resultOutput.innerHTML = "";
//     firstValue += el;
//     resultOutput.innerHTML = firstValue;
//     firstValue = +firstValue;
// }

// function getSecondValue(el) {
//     if(firstValue != "" && sign != "") {
//         secondValue += el;
//         resultOutput.innerHTML = secondValue;
//         secondValue = +secondValue;
//     }
// }

// function getSign() {
//     for(let i=0;i<signsBtn.length;i++) {
//         signsBtn[i].addEventListener('click', (e) => {
//             sign = e.target.getAttribute('value');
//             isFirstValue = true;
//         })
//     }
// }
// getSign();

// equalBtn.addEventListener('click', () => {
//     resultOutput.innerHTML = "";
//     if(sign === "+") {
//         resultValue = firstValue + secondValue;
//     } else if(sign === "-") {
//         resultValue = firstValue - secondValue;
//     } else if(sign === "*") {
//         resultValue = firstValue * secondValue;
//     } else if(sign === "/") {
//         resultValue = firstValue / secondValue;
//     }
//     resultOutput.innerHTML = resultValue;
//     firstValue = resultValue;
//     secondValue = "";

//     checkResultLength();
// })

// function checkResultLength() {
//     resultValue = JSON.stringify(resultValue);
    
//     if(resultValue.length >= 8) {
//         resultValue = JSON.parse(resultValue);
//         resultOutput.innerHTML = resultValue.toFixed(5);
//     }
// }

// resetBtn.addEventListener('click', () => {
//     resultOutput.innerHTML = 0;

//     firstValue = "";
//     isFirstValue = false;
//     secondValue = "";
//     isSecondValue = false;
//     sign = "";
//     resultValue = 0;
// })

// FUNKCIONALNOST 2

class Calculator {
    constructor(resultPrevious, resultOutput) {
        this.resultPrevious = resultPrevious;
        this.resultOutput = resultOutput;
        this.reset();
    }
    
    reset() {
        this.previousResult = '';
        this.outputResult = '';
        this.operation = undefined;
    }
    delete() {
        this.outputResult = this.outputResult.toString().slice(0, -1);
    }
    appendNumber(number) {
        if(number === '.' && this.outputResult.includes('.')) return;
        this.outputResult = this.outputResult.toString() + number.toString();
    }
    chooseOperation(operation) {
        if(this.outputResult === '') return;
        if(this.previousResult !== '' ) {
            this.compute();
        }
        this.operation = operation;
        this.previousResult = this.outputResult;
        this.outputResult = '';
    }
    compute() {
        let computation;
        const prev = parseFloat(this.previousResult);
        const current = parseFloat(this.outputResult);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation) {
            case '+' :
                computation = prev + current
                break
            case '-' :
                computation = prev - current
                break
            case '*' :
                computation = prev * current
                break
            case '/' :
                computation = prev / current
                break
            default:
                return
        }
        this.outputResult = computation;
        this.operation = undefined;
        this.previousResult = '';
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay;
        }
    }
    updateDisplay() {
        this.resultOutput.innerHTML = this.getDisplayNumber(this.outputResult);
        if(this.operation != null) {
            this.resultPrevious.innerHTML = 
            `${this.getDisplayNumber(this.previousResult)} ${this.operation}`
        } else {
            this.resultPrevious.innerHTML = '';
        }
    }
}

const calculator = new Calculator(resultPrevious, resultOutput);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.value);
        calculator.updateDisplay();
    })
})

signsBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.value);
        calculator.updateDisplay();
    })
})
equalBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});
resetBtn.addEventListener('click', button => {
    calculator.reset();
    calculator.updateDisplay();
});
deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});

document.addEventListener('keydown', (e) =>{
    for(let i=0;i<numberBtn.length;i++) {
        if(e.key === numberBtn[i].value) {
            calculator.appendNumber(numberBtn[i].value);
            calculator.updateDisplay();
        }
    }
    if(e.key === "Backspace") {
        calculator.delete();
        calculator.updateDisplay();
    }
    if(e.key === "Enter") {
        e.preventDefault()
        calculator.compute();
        calculator.updateDisplay();
    }
    signsBtn.forEach(button => {
        if(e.key === button.value) {
            calculator.chooseOperation(button.value);
            calculator.updateDisplay();
        }
    })
})
