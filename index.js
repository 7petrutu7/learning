let player = {
    nume: "Petru",
    bani: 200
}
let sum = 0
let hasBlackjack = false
let isAlive = false
let wantEl = document.getElementById("want-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let message = ""
let startGamePressed = false
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.nume + ": " + player.bani + "$"




function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 11){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}



function iftrigged (){
    if(sum < 21){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got the blackjack!"
        hasBlackjack = true
    }else {
        message = "You're out of the game"
        isAlive = false
    }
    wantEl.textContent = message
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secoundCard = getRandomNumber()
    cards = [firstCard, secoundCard]
    sum = firstCard + secoundCard
    startGamePressed = true
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    iftrigged()
}


function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomNumber()
        sum += card
        iftrigged()
        cardsEl.textContent += " " + card
        sumEl.textContent = "Sum: " + sum
    }
    
}
