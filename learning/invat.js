







let myleads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const clearBtn = document.getElementById("clear-btn")


clearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myleads = []
    ulEl.textContent = ""
})


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myleads = leadsFromLocalStorage
    render(myleads)
}


inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)

    localStorage.setItem("myleads", JSON.stringify(myleads))
    console.log(localStorage.getItem("myleads"))
    inputEl.value = ""
    
    render(myleads)
    
})


function render(leads){
    let listItems = []
    for (let i = 0 ; i < leads.length ; i ++){
        listItems += `
                    <li>
                        <a target = "_blank" href=" ${leads[i]}">  ${leads[i]}  </a>
                    </li>
                    `
    
    }
    ulEl.innerHTML = listItems
}


