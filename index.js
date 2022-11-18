let firstCard = 10
let secoundCard = 11
let sum = firstCard + secoundCard
let hasBlackjack = false
let isAlive = true

if(sum < 21){
    message = "Do you want to draw a new card?"
}else if(sum === 21){
    message = "You've got the blackjack!"
    hasBlackjack = true
}else {
    message = "You're out of the game"
    isAlive = false
}