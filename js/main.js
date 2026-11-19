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


// VALIDACIÓN DE FORMULARIO

const formContacto = document.querySelector('#formulario form');
const cajaMensaje = document.querySelector('#mensaje-estado');

if (formContacto) {
  formContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensaje = document.querySelector('#mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
      cajaMensaje.innerHTML = '<div class="alert alert-danger mt-3" role="alert">Por favor, completá todos los campos obligatorios.</div>';
    } else {
      cajaMensaje.innerHTML = '<div class="alert alert-success mt-3" role="alert">¡Consulta enviada con éxito! Nos contactaremos pronto.</div>';
      formContacto.reset();
    }
  });
}


// SMART HEADER (Ocultar al bajar / Mostrar al subir)

let ultimoScroll = 0;
const header = document.querySelector('header');

if (header) {
  window.addEventListener('scroll', () => {
    const scrollActual = window.scrollY;

    if (scrollActual > ultimoScroll && scrollActual > 100) {
      header.classList.add('header-oculto');
    } 

    else if (scrollActual < ultimoScroll) {
      header.classList.remove('header-oculto');
    }

    ultimoScroll = scrollActual <= 0 ? 0 : scrollActual;
  });
}
