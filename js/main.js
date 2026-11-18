const boton = document.getElementById("btn-mode");
// Al cargar la página, revisa si el usuario ya tenía el modo oscuro guardado
if (localStorage.getItem("modo-oscuro") === "activo") {
    document.body.classList.add("oscuro");
    boton.textContent = "Modo claro";
}
boton.addEventListener("click", () => {
 document.body.classList.toggle("oscuro");
 
 // Verifica si el body ahora tiene la clase para cambiar el texto del botón
    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "Modo claro";
        localStorage.setItem("modo-oscuro", "activo");
    } else {
        boton.textContent = "Modo oscuro";
        localStorage.removeItem("modo-oscuro");
    }
});
