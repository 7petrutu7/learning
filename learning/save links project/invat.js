







let myleads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const clearBtn = document.getElementById("clear-btn")
const tabBtn = document.getElementById("tab-btn")



clearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myleads = []
    ulEl.textContent = ""
})


tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)
    



    })

       
    
})








let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
if(leadsFromLocalStorage){
    myleads = leadsFromLocalStorage
    render(myleads)
}


inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)

    localStorage.setItem("myleads", JSON.stringify(myleads))
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


