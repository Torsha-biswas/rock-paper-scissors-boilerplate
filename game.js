const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    const playGame = () => {
        const rockBtn = document.querySelector('.logo.rock');
        const paperBtn = document.querySelector('.logo.paper');
        const scissorBtn = document.querySelector('.logo.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const playerBox = document.querySelector('.player-box');
        const computerBox = document.getElementById('computer-choice');

        //const computerOptions = ['rock', 'paper', 'scissors']
        const resetGame = () => {
            moves = 0;
            movesLeft.innerText = 'Moves Left: 5';

        };

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                const movesLeft = document.querySelector('.movesleft');
 
                moves++;
                movesLeft.innerText = `Moves Left: ${5 - moves}`;
                const choice = this.classList.contains('rock') ? 'rock' :
                           this.classList.contains('paper') ? 'paper' :
                           this.classList.contains('scissors') ? 'scissors' : '';

 

    // Update player's choice in the player-box
    playerBox.innerHTML = `<p>You</p><img class="hand-image" src="assets/${choice}-hand.png" alt="${choice}}">`;

    // Generate a random choice for the computer
    const computerChoices = ['rock', 'scissors', 'paper'];
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Update computer's choice in the comp-box
    computerBox.innerHTML = `<p>Comp</p><img class="hand-image" src="assets/${computerChoice}-hand.png" alt="${computerChoice}">`;

    winner(choice, computerChoice)
 
                // Calling gameOver function after 5 moves
                if (moves == 5) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
        resetGame();
};
 
    // Function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Tie'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            } else {
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    const gameOver = (playerOptions, movesLeft) => {
 
        const result = document.querySelector('.result');
        const reloadBtn = document.createElement('button');
        reloadBtn.className = 'reload';
        reloadBtn.innerText = 'Play Again';

    
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
    
        movesLeft.style.display = 'none';
        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        
    }
    function startGame() {
        window.location.href = "game.html";
    }
 
 
    // Calling playGame function inside game
    playGame();
 
}
 
// Calling the game function
game();