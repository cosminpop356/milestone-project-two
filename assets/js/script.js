
document.addEventListener("DOMContentLoaded", function(){
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener("click", function(){
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


function runGame() {
    
}

function playerChoice() {
    let choiceImage = document.getElementsByClassName('player-choice');
    document.getElementById('player-area').innerHTML = choiceImage
}


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
    let userChoice = document.getElementsByClassName('easy');
    let computerChoice = computerChoice();



}

/**
 * Adds 1 to the player's score.
 */
function incrementScorePlayer() {
    let oldScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++oldScore;

}
/**
 * Adds 1 to the computer's score.
 */
function incrementScoreComputer() {
    let oldScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++oldScore;
}

function checkGameWinner() {

}