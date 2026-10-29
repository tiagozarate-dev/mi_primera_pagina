const tipoEntrega = document.getElementById("transporte");
const respuesta = document.getElementById("respuesta");


tipoEntrega.addEventListener("change", function() {
    let opcion =tipoEntrega.value

    if(opcion === "baja"){respuesta.textContent = "Puede esperar";}
    else if (opcion === "media"){respuesta.textContent="Atender próximamente";}
    else {respuesta.textContent = "Atención prioritaria"}
});

