const computerDisplay = document.getElementById('computer-display');
const playerDisplay = document.getElementById('player-display');
const statusDisplay = document.getElementById('status-display');
const computerScore = document.getElementById('computer-score');
const playScore = document.getElementById('player-score');
const buttons = document.querySelectorAll('.btn');

let scores = { computer: 0, player: 0 };
const choices = { rock: '✊', paper: '✋', scissors: '✌️' };

function getComputerChoice() {
    const keys = Object.keys(choices);
    return keys[Math.floor(Math.random() * keys.length)];
}
function determineWinner(player, computer) {
    if (player === computer) return 'draw';

    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    return winConditions[player] === computer ? 'player' : 'computer';
}
function updateDisplay(playerChoice, computerChoice, result) {
    playerDisplay.textContent = choices[playerChoice];
    computerDisplay.textContent = choices[computerChoice];

    statusDisplay.textContent = 
    result === 'draw' ? 'Draw!' : 
    result === 'player' ? 'Player Win!' : 'Computer Wins!';

    if (result === 'player') scores.player++;
    if (result === 'computer') scores.computer++;

    computerScore.textContent = scores.computer;
    playScore.textContent = scores.player;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.querySelector('.emoji').textContent;
        const playerChoiceKey = Object.keys(choices).find(
            key => choices[key] === playerChoice
        );
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoiceKey, computerChoice);
        updateDisplay(playerChoiceKey, computerChoice, result);
    });
});


computerDisplay.textContent = choices.paper;
playerDisplay.textContent = choices.paper;
statusDisplay.textContent = 'CURRENTLY DRAW!';