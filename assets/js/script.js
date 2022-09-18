
document.addEventListener("DOMContentLoaded", function(){
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener("click", function(){
            if(this.getAttribute("data-type") === 'submit'){
                alert(`You picked ${'data-type'}`)
            }
        })
    }
})


function runGame() {

}

function checkAnswer() {

}

function computerChoice() {

}

function checkRoundWinner() {

}

function incrementScorePlayer() {

}

function incrementScoreComputer() {

}

function checkGameWinner() {

}