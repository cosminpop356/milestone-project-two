/* Main game function. Gets player input and computer choice to alert user who won. */
document.addEventListener("DOMContentLoaded", function(){
    let inputs = document.getElementsByTagName('input');
    console.log(inputs);
    for (let input of inputs) {
        input.addEventListener("click", function(){

            let number = computerChoice();

            if (this.getAttribute('data-type') === "rock"){

                /* The code below hides the other choices after user input 
                and makes them show after 1 second. This code repeats for each choice the user has.*/
                document.getElementById("player-paper-hard").style.display = 'none';
                document.getElementById("player-scissors-hard").style.display = 'none'; 

                setTimeout(function(){
                    document.getElementById("player-paper-hard").style.display = 'block';
                    document.getElementById("player-scissors-hard").style.display = 'block'; 
                }, 1000);
               
                if(number === 0){
                    setTimeout(function(){
                        alert("It's a Tie! Try again.");
                    }, 10);
                    
                } else if (number === 1){
                    setTimeout(function(){
                        alert("Paper covers Rock. Computer aquired 1 point!");
                    }, 10);
                    incrementScoreComputer();

                } else {
                    setTimeout(function(){
                        alert("Rock crushes Scissors. You aquired 1 point!");
                    }, 10);
                    incrementScorePlayer();
                }

            } else if(this.getAttribute('data-type') === "paper"){
                document.getElementById("player-rock-hard").style.display = 'none';
                document.getElementById("player-scissors-hard").style.display = 'none'; 
                
                setTimeout(function(){
                    document.getElementById("player-rock-hard").style.display = 'block';
                    document.getElementById("player-scissors-hard").style.display = 'block'; 
                }, 1000);

                if(number === 0){
                    setTimeout(function(){
                        alert("Paper covers Rock. You aquired 1 point!");
                    }, 10);
                    incrementScorePlayer();
                    
                } else if (number === 1){
                    setTimeout(function(){
                        alert("It's a Tie! Try again");
                    }, 10);
                    
                } else {
                    setTimeout(function(){
                        alert("Scissors cuts Paper. Computer aquired 1 point!");
                    }, 10);
                    incrementScoreComputer();
                   
                }

            } else if (this.getAttribute('data-type') === "scissors"){
                document.getElementById("player-paper-hard").style.display = 'none';
                document.getElementById("player-rock-hard").style.display = 'none'; 
                
                setTimeout(function(){
                    document.getElementById("player-paper-hard").style.display = 'block';
                    document.getElementById("player-rock-hard").style.display = 'block'; 
                }, 1000);

                if(number === 0){
                    setTimeout(function(){
                        alert("Rock crushes Scissors. Computer aquired 1 point!");
                    }, 10);
                    incrementScoreComputer();
                    
                } else if (number === 1){
                    setTimeout(function(){
                        alert("Scissors cuts Paper. You aquired 1 point!");
                    }, 10);
                    incrementScorePlayer();
                   
                } else {
                    setTimeout(function(){
                        alert("It's a Tie! Try again");
                    }, 10);  
                }
            }
            checkGameWinner();
        })
    }
})

/**
 * Gets a random number that matches a choice and
 * hides the other choices that don't match the random number.
 */
function computerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0){

        document.getElementById("computer-paper-hard").style.display = 'none';
        document.getElementById("computer-scissors-hard").style.display = 'none'; 

        setTimeout(function(){
            document.getElementById("computer-paper-hard").style.display = 'block';
            document.getElementById("computer-scissors-hard").style.display = 'block'; 
        }, 1000);

    } else if (randomNumber === 1) {

        document.getElementById("computer-rock-hard").style.display = 'none';
        document.getElementById("computer-scissors-hard").style.display = 'none'; 
                
        setTimeout(function(){
            document.getElementById("computer-rock-hard").style.display = 'block';
            document.getElementById("computer-scissors-hard").style.display = 'block'; 
        }, 1000);

    } else if (randomNumber === 2) {

        document.getElementById("computer-paper-hard").style.display = 'none';
        document.getElementById("computer-rock-hard").style.display = 'none'; 
                
        setTimeout(function(){
            document.getElementById("computer-paper-hard").style.display = 'block';
            document.getElementById("computer-rock-hard").style.display = 'block'; 
        }, 1000);
    } 
    
    return randomNumber;
}

/**
 * Gets the player score from DOM and adds 1 to it.
 */
function incrementScorePlayer() {
    let oldScore = parseInt(document.getElementById('player-score-number-hard').innerText);
    document.getElementById('player-score-number-hard').innerText = ++oldScore;
}

/**
 * Gets the computer score from DOM and adds 1 to it.
 */
function incrementScoreComputer() {
    let oldScore = parseInt(document.getElementById('computer-score-number-hard').innerText);
    document.getElementById('computer-score-number-hard').innerText = ++oldScore;
}


/**
 * Alerts user when a score reached 3 points and reloads page.
 */
function checkGameWinner(){
    let playerScore = parseInt(document.getElementById('player-score-number-hard').innerText);
    let computerScore = parseInt(document.getElementById('computer-score-number-hard').innerText);

    if (playerScore === 3){
        setTimeout(function(){
            alert("You reached 3 points. You win!");
            location.reload();
        }, 10);
   
    } else if (computerScore === 3){
        setTimeout(function(){
            alert("Computer reached 3 points. You lose!");
            location.reload();
        }, 10);
    }
}



