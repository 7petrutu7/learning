let count = 0
var numbers = []
let countEl = document.getElementById("count-el")
let historyEl = document.getElementById("history-el")
let totalPeopleEl = document.getElementById("totalPeople")



function increment(){
    countEl.textContent = count += 1
}

function decrement(){
    countEl.textContent = count += -1
}

function saveb() {
    historyEl.textContent += " "+ count
    numbers.push(count)
    let sum = 0
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    totalPeopleEl.textContent = "Total people entered: " + sum
    count = 0
    countEl.textContent = count


    howMany1 = document.getElementById("how-many1")
    howMany2 = document.getElementById("how-many2")
    howMany3 = document.getElementById("how-many3")
    howMany4 = document.getElementById("how-many4")
    howMany5 = document.getElementById("how-many5")
    howMany6 = document.getElementById("how-many6")
    howMany7 = document.getElementById("how-many7")
    howMany8 = document.getElementById("how-many8")
    howMany9 = document.getElementById("how-many9")
    howMany1.textContent = "1: " + getOccurrence(numbers, 1) + " "
    howMany2.textContent = "2: " + getOccurrence(numbers, 2) + " "
    howMany3.textContent = "3: " + getOccurrence(numbers, 3) + " "
    howMany4.textContent = "4: " + getOccurrence(numbers, 4) + " "
    howMany5.textContent = "5: " + getOccurrence(numbers, 5) + " "
    howMany6.textContent = "6: " + getOccurrence(numbers, 6) + " "
    howMany7.textContent = "7: " + getOccurrence(numbers, 7) + " "
    howMany8.textContent = "8: " + getOccurrence(numbers, 8) + " "
    howMany9.textContent = "9: " + getOccurrence(numbers, 9) + " "

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;




}    

}

function clearbtn(){
    count = 0
    numbers = []
    countEl.textContent = count
    historyEl.textContent = "History of people entered: "
    totalPeopleEl.textContent = "Total people entered: "
}






