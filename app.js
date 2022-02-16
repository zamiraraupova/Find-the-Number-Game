
let guessValue = document.querySelector("#guess")
let checkBtn = document.querySelector("#checkBtn")
let message = document.querySelector(".textArea")
let attemptHolder = document.querySelector("#attempt")
let reset = document.querySelector('#reset-btn')
let lower = 1
let upper = 100
let randomNumber = Math.floor(Math.random() * (upper - lower) + lower)

function randomNum(){
   
    let guess = guessValue.value
   
    if (randomNumber === Number(guess)) {
        return `You Won!`
    }
    if(randomNumber > Number(guess)){
        return `Go up`
    }
    if(randomNumber < Number(guess)){
        return `Go down`
    }
        return `You Lost, it was ${randomNumber}`
}

checkBtn.addEventListener("click", function (){
    if(guessValue.value === ""){
        return `inputs should not be empty`
    }

    message.textContent = randomNum()
    attemptHolder.textContent = + attemptHolder.textContent + 1
                            //  ^^ coercion 
    // if (Number(attemptHolder.textContent) !== 0) {
                
    //         }
    //         if (Number(attemptHolder.textContent) === 0) {
    //             checkBtn.style.visibility = "hidden"
    //         }
})

reset.addEventListener("click", function () {
    checkBtn.style.visibility = "visible"
    attemptHolder.textContent = 0
    guessValue.value = ""
    message.textContent = ""
})