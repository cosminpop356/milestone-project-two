
document.addEventListener("DOMContentLoaded", function(){
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener("click", function(){
            let playerChoice = this.getAttribute('data-type');
            if(playerChoice){
                alert(`You chose ${playerChoice}!`)
            }
        })
    }
    
})


function runGame(playerChoice) {
    
}

function checkAnswer() {

}

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
}

function checkRoundWinner() {

}

function incrementScorePlayer() {
    let oldScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++oldScore;

}

function incrementScoreComputer() {
    let oldScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++oldScore;
}

function checkGameWinner() {

}