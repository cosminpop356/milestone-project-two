
document.addEventListener("DOMContentLoaded", function(){
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener("click", function playerInput(){

            let number = computerChoice();
            console.log(number);

            if (this.getAttribute('data-type') === "rock"){
               document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[0].innerHTML;

                if(number === 0){
                    setTimeout(function(){
                    alert("It's a TIE! Try again.")}, 1000
                    )
                } else if (number === 1){
                    alert("Paper covers Rock. Computer wins!")
                    incrementScoreComputer();
                } else {
                    alert("Rock crushes Scissors. You win!")
                    incrementScorePlayer();
                }

            } else if(this.getAttribute('data-type') === "paper"){
                document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[1].innerHTML;

                if(number === 0){
                    alert("Paper covers Rock. You win!")
                    incrementScorePlayer();
                } else if (number === 1){
                    alert("It's a TIE! Try again")
                } else {
                    alert("Scissors cuts Paper. Computer wins!")
                    incrementScoreComputer();
                }

            } else if (this.getAttribute('data-type') === "scissors"){
                document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[2].innerHTML;

                if(number === 0){
                    alert("Rock crushes Scissors. Computer wins!")
                    incrementScoreComputer();
                } else if (number === 1){
                    alert("Scissors cuts Paper. You win!")
                    incrementScorePlayer();
                } else {
                    alert("It's a TIE! Try again")
                }
            }
        
        
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