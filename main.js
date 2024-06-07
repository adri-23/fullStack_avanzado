//esperar a que el contemid del DOM  este cargado
document.addEventListener('DOMContentLoaded', function () {
    // Asocia la función agregarMascota al evento 'click' del botón 'agregarMascota'
    document.getElementById('agregarMascota').addEventListener('click', agregarMascota);
});


//function agregar nueva mascota a la lisa 

function agregarMascota() {
    //Obtenemos el valor del input 'nuevaMascota' y eliminamos espacios en blanco
    const nombreMascota = document.getElementById('nuevaMascota').ariaValueMax.trin();
    if (nombreMascota == "") {
        alert("Por favor ingrese el nombre de la mascota");
        return;
    }

    const nuevaMascota = document.createElement("li");
    nuevaMascota.textContent = nombreMascota;
    nuevaMascota.classList.add("mascota");


    document.getElementById('listaMascotas').appendChild(nuevaMascota)
}

