let secretNumber = Math.floor(Math.random()*20+1)
console.log(secretNumber);
let highScore = 0

const displayMessage = function(message){
    const selectNumber = document.querySelector('.selectNumber')
    selectNumber.textContent = message
}
const functionBox = document.querySelector(".game_function_box");
const confirm_one = document.querySelector(".confirm");
20
const number = document.querySelector(".number")

confirm_one.addEventListener("click",function(){
    const guess = Number(document.querySelector(".guessInput").value)
    number.textContent = guess

    // no number
    if(!guess){
        displayMessage("No Number🚫")
    }
    // if user win 
    if(guess === secretNumber){
        displayMessage("Corrent Number");


        functionBox.style.backgroundColor = "green"
    }else(
        displayMessage("wrong Number")
    )

})

const reset = document.querySelector(".reset")
reset.addEventListener("click", function(){
    // const guess = document.querySelector(".guessInput").value
    displayMessage("Start guessing....")
    number.textContent = "?"
    functionBox.style.backgroundColor = "white"
})