
document.addEventListener("DOMContentLoaded", function(){
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener("click", function runGame(){

            let number = computerChoice();

            if (this.getAttribute('data-type') === "rock"){
               document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[0].innerHTML;

                if(number === 0){
                    setTimeout(function(){
                    alert("It's a TIE! Try again.")}, 10);
                    updateDiv();
                    
                } else if (number === 1){
                    setTimeout(function(){
                    alert("Paper covers Rock. Computer wins!")}, 10);
                    incrementScoreComputer();
                    updateDiv();
                
                } else {
                    setTimeout(function(){
                    alert("Rock crushes Scissors. You win!")}, 10);
                    incrementScorePlayer();
                    updateDiv();
                   
                }

            } else if(this.getAttribute('data-type') === "paper"){
                document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[1].innerHTML;

                if(number === 0){
                    setTimeout(function(){
                    alert("Paper covers Rock. You win!")}, 10);
                    incrementScorePlayer();
                    updateDiv();
                } else if (number === 1){
                    setTimeout(function(){
                    alert("It's a TIE! Try again")}, 10);
                    updateDiv();
                } else {
                    setTimeout(function(){
                    alert("Scissors cuts Paper. Computer wins!")}, 10);
                    incrementScoreComputer();
                    updateDiv();
                }

            } else if (this.getAttribute('data-type') === "scissors"){
                document.getElementById('player-area').innerHTML = document.getElementsByClassName('player-choice')[2].innerHTML;

                if(number === 0){
                    setTimeout(function(){
                    alert("Rock crushes Scissors. Computer wins!")}, 10);
                    incrementScoreComputer();
                    updateDiv();
                } else if (number === 1){
                    setTimeout(function(){
                    alert("Scissors cuts Paper. You win!")}, 10);
                    incrementScorePlayer();
                    updateDiv();
                } else {
                    setTimeout(function(){
                    alert("It's a TIE! Try again")}, 10);
                    updateDiv();
                }
            }
        
        
        })
    }
    return
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


/**
 * Adds 1 to the player's score.
 */
function incrementScorePlayer() {
    let oldScore = parseInt(document.getElementById('player-score-number').innerText);
    let newScore = document.getElementById('player-score-number').innerText = ++oldScore;

    return newScore;

}
/**
 * Adds 1 to the computer's score.
 */
function incrementScoreComputer() {
    let oldScore = parseInt(document.getElementById('computer-score-number').innerText);
    let newScore = document.getElementById('computer-score-number').innerText = ++oldScore;

    return newScore;
}

function checkGameWinner(){
    let playerScore = incrementScorePlayer();
    let computerScore = incrementScoreComputer();

    if (playerScore === 3){
        alert('You reached 3 points. You win!');
        location.reload();
    } else if (computerScore === 3){
        alert('Computer reached 3 points. You lose! :(');
        location.reload();
    }
}

function updateDiv(){
    setTimeout(function(){
    $( "#game-area" ).load(window.location.href + " #game-area" )}, 1000
    )
}