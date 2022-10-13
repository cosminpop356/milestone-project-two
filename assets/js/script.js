/* Main game function. Gets player input and computer choice to alert user who won. */
document.addEventListener("DOMContentLoaded", function(){
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener("click", function(){

            let number = computerChoice();

            if (this.getAttribute('data-type') === "rock"){

                /* The code below hides the other choices after user input 
                and makes them show after 1 second. This code repeats for each choice the user has.*/
                document.getElementById("player-paper").style.display = 'none';
                document.getElementById("player-scissors").style.display = 'none'; 

                setTimeout(function(){
                    document.getElementById("player-paper").style.display = 'block'
                    document.getElementById("player-scissors").style.display = 'block'; 
                }, 1000);
               
                if(number === 0){
                    setTimeout(function(){
                        alert("It's a Tie! Try again.")
                    }, 10);
                    
                } else if (number === 1){
                    setTimeout(function(){
                        alert("Paper covers Rock. Computer wins!")
                    }, 10);
                    incrementScoreComputer();

                } else {
                    setTimeout(function(){
                        alert("Rock crushes Scissors. You win!")
                    }, 10);
                    incrementScorePlayer();
                }

            } else if(this.getAttribute('data-type') === "paper"){
                document.getElementById("player-rock").style.display = 'none';
                document.getElementById("player-scissors").style.display = 'none'; 
                
                setTimeout(function(){
                    document.getElementById("player-rock").style.display = 'block'
                    document.getElementById("player-scissors").style.display = 'block'; 
                }, 1000);

                if(number === 0){
                    setTimeout(function(){
                    alert("Paper covers Rock. You win!")}, 10);
                    
                    incrementScorePlayer();
                    
                } else if (number === 1){
                    setTimeout(function(){
                    alert("It's a TIE! Try again")}, 10);
                    
                } else {
                    setTimeout(function(){
                    alert("Scissors cuts Paper. Computer wins!")}, 10);
                    incrementScoreComputer();
                   
                }

            } else if (this.getAttribute('data-type') === "scissors"){
                document.getElementById("player-paper").style.display = 'none';
                document.getElementById("player-rock").style.display = 'none'; 
                
                setTimeout(function(){
                    document.getElementById("player-paper").style.display = 'block';
                    document.getElementById("player-rock").style.display = 'block'; 
                }, 1000);

                if(number === 0){
                    setTimeout(function(){
                        alert("Rock crushes Scissors. Computer wins!")
                    }, 10);
                    incrementScoreComputer();
                    
                } else if (number === 1){
                    setTimeout(function(){
                        alert("Scissors cuts Paper. You win!")
                    }, 10);
                    incrementScorePlayer();
                   
                } else {
                    setTimeout(function(){
                        alert("It's a TIE! Try again")
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

        document.getElementById("computer-paper").style.display = 'none';
        document.getElementById("computer-scissors").style.display = 'none'; 

        setTimeout(function(){
            document.getElementById("computer-paper").style.display = 'block';
            document.getElementById("computer-scissors").style.display = 'block'; 
        }, 1000);

    } else if (randomNumber === 1) {

        document.getElementById("computer-rock").style.display = 'none';
        document.getElementById("computer-scissors").style.display = 'none'; 
                
        setTimeout(function(){
            document.getElementById("computer-rock").style.display = 'block';
            document.getElementById("computer-scissors").style.display = 'block'; 
        }, 1000);

    } else if (randomNumber === 2) {

        document.getElementById("computer-paper").style.display = 'none';
        document.getElementById("computer-rock").style.display = 'none'; 
                
        setTimeout(function(){
            document.getElementById("computer-paper").style.display = 'block';
            document.getElementById("computer-rock").style.display = 'block'; 
        }, 1000);
    } 
    
    return randomNumber;
}

/**
 * Gets the player score from DOM and adds 1 to it.
 */
function incrementScorePlayer() {
    let oldScore = parseInt(document.getElementById('player-score-number').innerText);
    document.getElementById('player-score-number').innerText = ++oldScore;
}

/**
 * Gets the computer score from DOM and adds 1 to it.
 */
function incrementScoreComputer() {
    let oldScore = parseInt(document.getElementById('computer-score-number').innerText);
    document.getElementById('computer-score-number').innerText = ++oldScore;
}


/**
 * Alerts user when a score reached 3 points and reloads page.
 */
function checkGameWinner(){
    let playerScore = parseInt(document.getElementById('player-score-number').innerText);
    let computerScore = parseInt(document.getElementById('computer-score-number').innerText);

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



