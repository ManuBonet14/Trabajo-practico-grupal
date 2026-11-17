const boton = document.getElementById("btn-mode");
boton.addEventListener("click", () => {
 document.body.classList.toggle("oscuro");
 
 // Verifica si el body ahora tiene la clase para cambiar el texto del botón
    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "Modo claro";
    } else {
        boton.textContent = "Modo oscuro";
    }
});
