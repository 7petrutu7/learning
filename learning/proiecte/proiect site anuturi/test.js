

// start 1) stocam din html in variabile, inputuri, butonane , etc.

const titluInput = document.getElementById("titluinput")
const CategorieInput = document.getElementById("categorieinput")
const textareaInput = document.getElementById("textarea")
const fileInput = document.getElementById("inputFile")
const pretInput = document.getElementById("pretinput")
const submitButton = document.getElementById("submit")
const divAnuntGata = document.getElementById("anuntGata")

// end 1)


// start 2) asculta daca sa apasat pe submit, si dupa cheama functile cu argumente 

submitButton.addEventListener("click", function(){
    storeInput("titlu", titluInput.value, titluInput)
    storeInput("categorie", CategorieInput.value, CategorieInput)
    storeInput("textarea", textareaInput.value, textareaInput)
    storeInput("pret", pretInput.value, pretInput)
    pRender(1, 'titlu', 'Titlu: ')
    pRender(2, 'categorie', 'Categorie: ')
    pRender(3, 'pret', 'Pret: ')
    pRender(4, 'textarea', 'Descriere: ')
    localStorage.clear()
    
})

//end 2)


// start 3) salveaza inputurile in local storage 

function storeInput(numekeye, valoarea, inputname){
    localStorage.setItem(numekeye, valoarea) 
    inputname.value =""

}
// end 3)


// start 4) rendeaza paragrafe cu ce introduci in input 

function pRender(pnumber, key, numep){
    pnumber = document.createElement("p")
    pnumber.textContent = numep + localStorage.getItem(key)
    divAnuntGata.appendChild(pnumber)
}

// end 4)

// start 5) adaugi o imagine la anunt 
window.onload = function() {

    let fileInput = document.getElementById('inputfile');
    let imgDivLet = document.getElementById('imgDiv');


    fileInput.addEventListener('change', function(e) {
        let file = fileInput.files[0];
        let imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                imgDivLet.innerHTML = "";

                var img = new Image();
                img.src = reader.result;

                imgDivLet.appendChild(img);
            }

            reader.readAsDataURL(file); 
        } else {
            imgDivLet.innerHTML = "File not supported!"
        }
    });

}

// end 5)