'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
       document.querySelector('.message').textContent = '😵 No number!'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "😀 Correct Number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Too High!"
        updateScore();
    } else {
        document.querySelector('.message').textContent = "Too Low!"
        updateScore();
    }

    if (score === 0) {
        document.querySelector('.message').textContent = "💥 GAME OVER!!! 💥";
    }
    });

function updateScore() {
    score--;
    document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});