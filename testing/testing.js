
let fruits = ["mar", "portocala", "mar", "mar", "portocala"]
marEl = document.getElementById("mar-el")
portocalaEl = document.getElementById("portocala-el")


function sortz(){
    for(i = 0; i < fruits.length; i++){
        if(fruits[i] === "mar"){
            marEl.textContent += fruits[i] + " "
        }else if(fruits[i] === "portocala"){
            portocalaEl.textContent += fruits[i] + " "
        }
    }
}

sortz()