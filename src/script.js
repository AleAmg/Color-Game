// ARREGLO
var colores = [
    generateRandomColors(),
    generateRandomColors(),
    generateRandomColors(),
    generateRandomColors(),
    generateRandomColors(),
    generateRandomColors(),
]

// VARIABLES
var num = 6 
var cuadros = document.querySelectorAll(".square")
var pickedColor = document.querySelector("#colorDisplay").textContent = colores[pickColor()]
var mensaje = document.querySelector("#message")
var h1 = document.querySelector("h1")
var boton = document.querySelector("#reset")


// FOR que recorre los cuadros

    for(let i = 0; i < cuadros.length; i++){
        cuadros[i].style.backgroundColor = colores[i]
        cuadros[i].addEventListener("click", function (){
                
            if (colores[i] != pickedColor) {
                mensaje.textContent = "Intente nuevamente"
                this.style.backgroundColor = "#232323"
                mensaje.style.color = "black"
            } else if (colores[i] == pickedColor) {
                mensaje.textContent = "Correcto"
                h1.style.color = pickedColor
                boton.textContent = "Jugar otra vez?"
                return changeColors()
               }                   
        })        
    }
    

// BOTONES            
boton.addEventListener("click", function () {
    reset()   
})

facil.addEventListener("click", function (){
    facil.classList.add("selected")
    dificil.classList.remove("selected")
    seleccionar()
})

dificil.addEventListener("click", function (){
    dificil.classList.add("selected")
    facil.classList.remove("selected")
    seleccionar()
})

// FUNCIONES

    function changeColors () {
        for (let i = 0; i < cuadros.length; i++) {
            cuadros[i].style.backgroundColor = pickedColor
            colores[i] = pickedColor              
        }
    }

    function pickColor() {
        return Math.floor( Math.random()*num)
    }
    
    function randomColor() {
        return Math.floor( Math.random()*256)
    }

    function generateRandomColors() {
        return (`rgb(${randomColor()} , ${randomColor()}, ${randomColor()})`)            
    }
    

    function reset(){
        for(let i = 0; i < cuadros.length; i++){
        colores[i] = generateRandomColors()
        cuadros[i].style.backgroundColor = colores[i]
        pickedColor = colores[pickColor()]
        document.querySelector("#colorDisplay").textContent = pickedColor
        h1.style.color = "white" 
        mensaje.textContent = ""
        boton.textContent = "Nuevos Colores"             
        }           
    }
    
    function seleccionar(){
        
            if(document.querySelector(".selected").textContent == "Facil"){  
                for (let i = 0; i < cuadros.length; i++) { 
                cuadros[3].classList.add("mas")    
                cuadros[4].classList.add("mas")
                cuadros[5].classList.add("mas")
                }
                num = 3     
            } else if (document.querySelector(".selected").textContent == "Dificil"){
                for (let i = 0; i < cuadros.length; i++) {
                cuadros[i].classList.remove("mas")
            }
                num = 6

            }
    reset()
    }
    


    
