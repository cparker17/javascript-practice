'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
       updateMessage('😵 No number!');
    } else if (guess === secretNumber) {
        updateMessage("😀 Correct Number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        guess > secretNumber ? updateMessage("Too High!") : updateMessage("Too Low!");
        score--;
        document.querySelector('.score').textContent = score;
    }
    if (score === 0) {
        updateMessage("💥 GAME OVER!!! 💥");
    }
    });

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    updateMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 'score';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

function updateMessage(message) {
    document.querySelector('.message').textContent = message;
}
