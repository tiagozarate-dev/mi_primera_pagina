const numero = document.getElementById("numero")
const eleccion = document.getElementById("eleccion")
const resultado = document.getElementById("resultado")
const pasiones = document.getElementById("pasiones")
const imagen =document.getElementById("imagen")
const boton = document.getElementById("boton")
numero.addEventListener("input", function() {
    let respuesta = Number(numero.value)

    if(respuesta>7 && respuesta<=20){ 
        resultado.textContent = "Arriba pero no tanto"
    }
    else if(respuesta>20){
        resultado.textContent = "Muy arriba"
    }
    else if(respuesta<7){
        resultado.textContent = "Abajo"
    }
    else if(respuesta === 7){
        resultado.textContent = "Felicidades acertaste"
    }
    else{
        resultado.textContent = "Escribe un numero"
    }
})
eleccion.addEventListener("change", function() {
    let opcion = eleccion.value

    if(opcion === "futbol"){
        pasiones.textContent = "El mejor Equipo del mundo y de la historia, el real madrid que a lo largo de sus años se ha encargado de hacer cosas inexplicables y que solo sus hinchas lo sienten.";
        imagen.src = "img/image3.png";
        
    }
    else if(opcion === "lugar"){
        pasiones.textContent = "Las canchas de fútbol que albergan recuerdos y experiencias que viven en nosotros y cuando se asiste a un partido se piensa es en pasarla bien independientemente el resultado.";
        imagen.src = "img/image2.png";
    }
    else if(opcion === "accionFav"){
        pasiones.textContent = "En el computador es donde paso mayor tiempo donde comparto con mis amigos jugando videojuegos o donde simplemente lo estoy usando para alimentar mi conocimiento.";
        imagen.src = "img/image.png";

    }
    else {
        pasiones.textContent = ""
        imagen.src = "img/images.jpg";
    }
});

boton.addEventListener("click", function() { 
    alert("Profe perdoneme las planas todo bien.")
})
