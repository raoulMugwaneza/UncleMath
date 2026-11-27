

let score = 0; 
let firstNum = Math.floor(Math.random()*100);
let operationSign = ['+', '-','/', '*'];
let selectedOp = operationSign[Math.floor(Math.random()*4)];
let secondNum = Math.floor(Math.random()*100); 
document.getElementById('firstNum').innerText = firstNum; 
document.getElementById('operationSign').innerText = selectedOp; 
document.getElementById('secondNum').innerText = secondNum;
document.getElementById('scoreID').innerText = score; 


const textArea = document.getElementById('answer');

textArea.addEventListener('keydown', 
    function (event) { 
        if (event.key >='0' && event.key <= '9'){return}
        if (
            ["Backspace", "Delete", "ArrowLeft", "ArrowRight",
         "Tab", "Home", "End"].includes(event.key) 
        ){return }

        event.preventDefault(); 
}); 

function verification(){

    let answer = Number(document.getElementById('answer').value);
    let correctAnswer;

    if (selectedOp === '+') {
        correctAnswer = firstNum + secondNum;
    } 
    else if (selectedOp === '-') {
        correctAnswer = firstNum - secondNum;
    } 
    else if (selectedOp === '*') {
        correctAnswer = firstNum * secondNum;
    } 
    else if (selectedOp === '/') {
        correctAnswer = firstNum / secondNum;
    }

    if (answer === correctAnswer) {
        score++;
        document.getElementById('scoreID').innerText = score;
}
else { score--;
    document.getElementById('scoreID').innerText = score;
}
}

// a closure version of this would be

function verifClos(){

    let score = 0; 
let firstNum = Math.floor(Math.random()*100);
let operationSign = ['+', '-','/', '*'];
let selectedOp = operationSign[Math.floor(Math.random()*4)];
let secondNum = Math.floor(Math.random()*100); 

// all functions under here

}

/*
call the required functions using 
veriClos.func
*/
