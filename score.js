// Iteration 8: Making scoreboard functional
let playAgain= document.getElementById("play-again-button");
playAgain.addEventListener('click',function(){
    window.location.href='./game.html'
})

let score = localStorage.getItem("gameScore");
document.getElementById("score-board").innerText=score;