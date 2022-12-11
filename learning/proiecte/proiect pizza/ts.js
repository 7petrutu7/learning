// 1) start Creaza-ti pizza preferata!, dimensiune
const mica = document.getElementById("mica")
const medie = document.getElementById("medie")
const mare = document.getElementById("mare")
const suprema = document.getElementById("suprema")
const doi = 2
let countMica = 0
let countMedie = 0
let countMare = 0
let countSuprema = 0


function countChangeColor(dimensiune, countDimensiune, doiDimensiune){
    dimensiune.addEventListener("click", function(){
        dimensiune.style.color = "green"
        countDimensiune ++
        dimensiune.style.backgroundImage = "url('pizzalogo.jpg')";
        dimensiune.style.backgroundSize = "100px 100px";
        if(countDimensiune === doiDimensiune){
            dimensiune.style.color = "black"
            doiDimensiune += doi
        dimensiune.style.background = "whitesmoke"
        }
    })
}

countChangeColor(JSON.parse = mica, JSON.parse = countMica, JSON.parse = 2)
countChangeColor(JSON.parse = medie, JSON.parse = countMedie, JSON.parse = 2)
countChangeColor(JSON.parse = mare, JSON.parse = countMare, JSON.parse = 2)
countChangeColor(JSON.parse = suprema, JSON.parse = countSuprema, JSON.parse = 2)

// 1) end Creaza-ti pizza preferata!, dimensiune


// 2) start Ingrediente 

const sosDeRosii = document.getElementById("sosderosii")
const masline = document.getElementById("masline")
const mozzarella = document.getElementById("mozzarella")
const parmezan = document.getElementById("parmezan")
const usturoi = document.getElementById("usturoi")
const ceapa = document.getElementById("ceapa")
const oregano = document.getElementById("oregano")
const rosii = document.getElementById("rosii")
const cascaval = document.getElementById("cascaval")
const ciuperci = document.getElementById("ciuperci")
const ardei = document.getElementById("ardei")
const busuioc = document.getElementById("busuioc")
const ou = document.getElementById("ou")
const castraveti = document.getElementById("castraveti")
const ananas = document.getElementById("ananas")
const porumb = document.getElementById("porumb")
const branza = document.getElementById("branza")
const fasole = document.getElementById("fasole")
const zucchini = document.getElementById("zucchini")
const bacon = document.getElementById("bacon")
const ton = document.getElementById("ton")
const pui = document.getElementById("pui")
const peste = document.getElementById("peste")
const vita = document.getElementById("vita")
const salam = document.getElementById("salam")
const somon = document.getElementById("somon")
const creveti = document.getElementById("creveti")

let sosDeRosiiCount = 0
let maslineCount = 0
let mozzarellaCount = 0
let parmezanCount = 0
let usturoiCount = 0
let ceapaCount = 0
let oreganoCount = 0
let rosiiCount = 0
let cascavalCount = 0
let ciuperciCount = 0
let ardeiCount = 0
let busuiocCount = 0
let ouCount = 0
let castravetiCount = 0
let ananasCount = 0
let porumbCount = 0
let branzaCount = 0
let fasoleCount = 0
let zucchiniCount = 0
let baconCount = 0
let tonCount = 0
let puiCount = 0
let pesteCount = 0
let vitaCount = 0
let salamCount = 0
let somonCount = 0
let crevetiCount = 0



function ael(ingredient,number){
    ingredient.addEventListener("click", function(){
        
        
         if(number === 1){
            ingredient.style.backgroundImage = "url('/poze ingrediente/sosderosii.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            sosDeRosiiCount ++
            if(sosDeRosiiCount === 2){
                ingredient.style.backgroundImage = ""
                sosDeRosiiCount -= 2
            }
            
        }else if(number === 2){
            ingredient.style.backgroundImage = "url('/poze ingrediente/masline.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            maslineCount ++
            if(maslineCount === 2){
                ingredient.style.backgroundImage = ""
                maslineCount -= 2
            }
        }else if(number === 3){
            ingredient.style.backgroundImage = "url('/poze ingrediente/mozzarella.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            mozzarellaCount ++
            if(mozzarellaCount === 2){
                ingredient.style.backgroundImage = ""
                mozzarellaCount -= 2
            }
        }else if(number === 4){
            ingredient.style.backgroundImage = "url('/poze ingrediente/parmezan.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            parmezanCount ++
            if(parmezanCount === 2){
                ingredient.style.backgroundImage = ""
                parmezanCount -= 2
            }
        }else if(number === 5){
            ingredient.style.backgroundImage = "url('/poze ingrediente/usturoi.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            usturoiCount ++
            if(usturoiCount === 2){
                ingredient.style.backgroundImage = ""
                usturoiCount -= 2
            }
        }else if(number === 6){
            ingredient.style.backgroundImage = "url('/poze ingrediente/ceapa.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            ceapaCount ++
            if(ceapaCount === 2){
                ingredient.style.backgroundImage = ""
                ceapaCount -= 2
            }
        }else if(number === 7){
            ingredient.style.backgroundImage = "url('/poze ingrediente/oregano.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            oreganoCount ++
            if(oreganoCount === 2){
                ingredient.style.backgroundImage = ""
                oreganoCount -= 2
            }
        }else if(number === 8){
            ingredient.style.backgroundImage = "url('/poze ingrediente/rosii.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            rosiiCount ++
            if(rosiiCount === 2){
                ingredient.style.backgroundImage = ""
                rosiiCount -= 2
            }
        }else if(number === 9){
            ingredient.style.backgroundImage = "url('/poze ingrediente/cascaval.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            cascavalCount ++
            if(cascavalCount === 2){
                ingredient.style.backgroundImage = ""
                cascavalCount -= 2
            }
        }else if(number === 10){
            ingredient.style.backgroundImage = "url('/poze ingrediente/ciuperci.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            ciuperciCount ++
            if(ciuperciCount === 2){
                ingredient.style.backgroundImage = ""
                ciuperciCount -= 2
            }
        }else if(number === 11){
            ingredient.style.backgroundImage = "url('/poze ingrediente/ardei.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            ardeiCount ++
            if(ardeiCount === 2){
                ingredient.style.backgroundImage = ""
                ardeiCount -= 2
            }
        }else if(number === 12){
            ingredient.style.backgroundImage = "url('/poze ingrediente/busuioc.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            busuiocCount ++
            if(busuiocCount === 2){
                ingredient.style.backgroundImage = ""
                busuiocCount -= 2
            }
        }else if(number === 13){
            ingredient.style.backgroundImage = "url('/poze ingrediente/ou.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            ouCount ++
            if(ouCount === 2){
                ingredient.style.backgroundImage = ""
                ouCount -= 2
            }
        }else if(number === 14){
            ingredient.style.backgroundImage = "url('/poze ingrediente/castraveti.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            castravetiCount ++
            if(castravetiCount === 2){
                ingredient.style.backgroundImage = ""
                castravetiCount -= 2
            }
        }else if(number === 15){
            ingredient.style.backgroundImage = "url('/poze ingrediente/ananas.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            ananasCount ++
            if(ananasCount === 2){
                ingredient.style.backgroundImage = ""
                ananasCount -= 2
            }
        }else if(number === 16){
            ingredient.style.backgroundImage = "url('/poze ingrediente/porumb.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            porumbCount ++
            if(porumbCount === 2){
                ingredient.style.backgroundImage = ""
                porumbCount -= 2
            }
        }else if(number === 17){
            ingredient.style.backgroundImage = "url('/poze ingrediente/branza.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            branzaCount ++
            if(branzaCount === 2){
                ingredient.style.backgroundImage = ""
                branzaCount -= 2
            }
        }else if(number === 18){
            ingredient.style.backgroundImage = "url('/poze ingrediente/fasole.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            fasoleCount ++
            if(fasoleCount === 2){
                ingredient.style.backgroundImage = ""
                fasoleCount -= 2
            }
        }else if(number === 19){
            ingredient.style.backgroundImage = "url('/poze ingrediente/zucchini.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            zucchiniCount ++
            if(zucchiniCount === 2){
                ingredient.style.backgroundImage = ""
                zucchiniCount -= 2
            }
        }else if(number === 20){
            ingredient.style.backgroundImage = "url('/poze ingrediente/bacon.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            baconCount ++
            if(baconCount === 2){
                ingredient.style.backgroundImage = ""
                baconCount -= 2
            }
        }else if(number === 21){
            ingredient.style.backgroundImage = "url('/poze ingrediente/ton.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            tonCount ++
            if(tonCount === 2){
                ingredient.style.backgroundImage = ""
                tonCount -= 2
            }
        }else if(number === 22){
            ingredient.style.backgroundImage = "url('/poze ingrediente/pui.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            puiCount ++
            if(puiCount === 2){
                ingredient.style.backgroundImage = ""
                puiCount -= 2
            }
        }else if(number === 23){
            ingredient.style.backgroundImage = "url('/poze ingrediente/peste.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            pesteCount ++
            if(pesteCount === 2){
                ingredient.style.backgroundImage = ""
                pesteCount -= 2
            }
        }else if(number === 24){
            ingredient.style.backgroundImage = "url('/poze ingrediente/vita.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            vitaCount ++
            if(vitaCount === 2){
                ingredient.style.backgroundImage = ""
                vitaCount -= 2
            }
        }else if(number === 25){
            ingredient.style.backgroundImage = "url('/poze ingrediente/salam.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            salamCount ++
            if(salamCount === 2){
                ingredient.style.backgroundImage = ""
                salamCount -= 2
            }
        }else if(number === 26){
            ingredient.style.backgroundImage = "url('/poze ingrediente/somon.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            somonCount ++
            if(somonCount === 2){
                ingredient.style.backgroundImage = ""
                somonCount -= 2
            }
        }else if(number === 27){
            ingredient.style.backgroundImage = "url('/poze ingrediente/creveti.jpg')";
            ingredient.style.backgroundSize = "100px 100px";
            crevetiCount ++
            if(crevetiCount === 2){
                ingredient.style.backgroundImage = ""
                crevetiCount -= 2
            }
        }
    })
}
ael(JSON.parse = sosDeRosii, 1)
ael(JSON.parse = masline, 2)
ael(JSON.parse = mozzarella, 3)
ael(JSON.parse = parmezan, 4)
ael(JSON.parse = usturoi, 5)
ael(JSON.parse = ceapa, 6)
ael(JSON.parse = oregano, 7)
ael(JSON.parse = rosii,8)
ael(JSON.parse = cascaval, 9)
ael(JSON.parse = ciuperci, 10)
ael(JSON.parse = ardei,11)
ael(JSON.parse = busuioc,12)
ael(JSON.parse = ou,13)
ael(JSON.parse = castraveti,14)
ael(JSON.parse = ananas,15)
ael(JSON.parse = porumb,16)
ael(JSON.parse = branza,17)
ael(JSON.parse = fasole,18)
ael(JSON.parse = zucchini,19)
ael(JSON.parse = bacon,20)
ael(JSON.parse = ton,21)
ael(JSON.parse = pui,22)
ael(JSON.parse = peste,23)
ael(JSON.parse = vita,24)
ael(JSON.parse = salam,25)
ael(JSON.parse = somon,26)
ael(JSON.parse = creveti,27)




