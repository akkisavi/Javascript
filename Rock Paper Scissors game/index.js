const choices=["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const scoreDisplayPlayer = document.getElementById('scoreDisplayPlayer');
const scoreDisplayComputer = document.getElementById('scoreDisplayComputer');
let PlayerScore = 0;
let ComputerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = '';

    if(playerChoice===computerChoice){
        result = `It's a Tie!!`
    }  
    else{
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'scissors')? 'You Win!': 'You Lose!';
                break;
            case 'paper':
                result = (computerChoice === 'rock')? 'You Win!': 'You Lose!';
                break;
            case 'scissors':
                result = (computerChoice === 'paper')? 'You Win!': 'You Lose!';
                break;
            }
        }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

        resultDisplay.classList.remove('greentext','redtext')

   switch(result){
    case 'You Win!': 
    resultDisplay.classList.add("greentext");
    PlayerScore++;
    scoreDisplayPlayer.textContent = PlayerScore;
    break;
    case 'You Lose!':
    resultDisplay.classList.add("redtext");
    ComputerScore++;
    scoreDisplayComputer.textContent = ComputerScore;
   }
}