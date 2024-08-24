let randomNum = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('.btn');
const field = document.querySelector('#input');
const guesses = document.querySelector('.guesses');
const result = document.querySelector('.results');
const lowOrHi = document.querySelector('.low');
const startOver = document.querySelector('.resultGuess');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',function(e) {
     e.preventDefault();
     const guess =  parseInt(field.value); 
     validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please Enter valid guess');
    }
    else if(guess < 1){
        alert('please Enter valid number more than or equal t0 1')
    }
    else if (guess > 100) {
        alert('please Enter valid number less than or equal to 100')
    }
    else{
        prevGuess.push(guess);
    }
    if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over , random number was ${randomNum}`);
        endGame();
    }
    else{
        displayGuess(guess);
        cheakGuess(guess);
    }
}

function cheakGuess(guess) {
    if (guess === randomNum) {
        displayMessage('you guessed it right')
        endGame();
    }
    else if (guess <randomNum) {
        displayMessage('Number is Too low');
    }
    else if (guess > randomNum) {
        displayMessage('Number is Too High');
    }


}

function displayGuess(guess) {
    field.value='';
    guesses.innerHTML+=`${guess}   `
    numGuess++;
    result.innerHTML=`${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    field.value='';
    field.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h4 id="newGame" style="color:blue; cursor:pointer;">start New Game</h4>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function (e) {
        randomNum = parseInt(Math.random()*100 + 1);
        prevGuess=[];
        numGuess=1;
        guesses.innerHTML = '';
        result.innerHTML = `${11 - numGuess}`
        field.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame =true;
    })
}

