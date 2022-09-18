
document.addEventListener("DOMContentLoaded", function(){
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener("click", function playerInput(){
            if (this.getAttribute('data-type') === "rock"){
               document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[0].innerHTML;
            } else if(this.getAttribute('data-type') === "paper"){
                document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[1].innerHTML;
            } else if (this.getAttribute('data-type') === "scissors"){
                document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[2].innerHTML;
            }
        computerChoice();
        })
    }
    

})


/**
 * Gets a random number between 0 and 2 and changes innnerHTML of the computer board
 * with the choice that matches the index of the computer's possible choices.
 */
function computerChoice() {
    let computerRandom = document.getElementsByClassName('computer-choice');
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0){
        document.getElementById("computer").innerHTML = computerRandom[0].innerHTML;
    } else if (randomNumber === 1) {
        document.getElementById("computer").innerHTML = computerRandom[1].innerHTML;
    } else if (randomNumber === 2) {
        document.getElementById("computer").innerHTML = computerRandom[2].innerHTML;
    } else {
        alert("An error ocurred! Try again!");
        throw ("Aborting!");
    }

    return randomNumber;
}

function checkRoundWinner() {
    let userInput = document.getElementsByTagName('input').getAttribute("data-type");
    let computerInput = document.getElementsByClassName('computer-choice');
    
    for (let i=0; i<computerInput.length; i++){

        if (userInput === "rock" || computerInput[i].getAttribute('data-type') === "rock"){
            alert("It's a tie! Choose again.");

        } else if (userInput === "rock" || computerInput[i].getAttribute('data-type') === "paper"){
            alert("Paper covers Rock! Computer wins!");
            incrementScoreComputer();

        } else if (userInput === "rock" || computerInput[i].getAttribute('data-type') === "scissors"){
            alert("Rock curshes Scissors! You win!");
            incrementScorePlayer();

        } else if (userInput === "paper" || computerInput[i].getAttribute('data-type') === "rock"){
            alert("Paper covers Rock! You win!");
            incrementScorePlayer();

        } else if (userInput === "paper" || computerInput[i].getAttribute('data-type') === "paper"){
            alert("It's a tie! Choose again.");

        } else if (userInput === "paper" || computerInput[i].getAttribute('data-type') === "scissors"){
            alert("Scissors cuts Paper! Computer wins!");
            incrementScoreComputer();

        } else if (userInput === "scissors" || computerInput[i].getAttribute('data-type') === "rock"){
            alert("Rock curshes Scissors! Computer wins!");
            incrementScoreComputer();

        } else if (userInput === "scissors" || computerInput[i].getAttribute('data-type') === "paper"){
            alert("Scissors cuts Paper! You win!");
            incrementScorePlayer();

        } else if (userInput === "scissors" || computerInput[i].getAttribute('data-type') === "scissors"){
            alert("It's a tie! Choose again.");
        }
    }

}

/**
 * Adds 1 to the player's score.
 */
function incrementScorePlayer() {
    let oldScore = parseInt(document.getElementById('player-score-number').innerText);
    document.getElementById('player-score-number').innerText = ++oldScore;

}
/**
 * Adds 1 to the computer's score.
 */
function incrementScoreComputer() {
    let oldScore = parseInt(document.getElementById('computer-score-number').innerText);
    document.getElementById('computer-score-number').innerText = ++oldScore;
}

function checkGameWinner() {

}