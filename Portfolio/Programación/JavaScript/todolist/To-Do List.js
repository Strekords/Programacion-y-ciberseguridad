// Definir variables
const tareaInput = document.getElementById("tareaInput");
const listaTareas = document.getElementById("listaTareas");
const mensajeError = document.getElementById("mensajeError");

// Función para agregar una nueva tarea
function agregarTarea() {
  // Verificar si el campo de entrada está vacío
  if (tareaInput.value !== "") {
    // Crear nuevo elemento li
    const nuevaTarea = document.createElement("li");

    // Agregar contenido y botón para eliminar
    nuevaTarea.innerHTML = `
        ${tareaInput.value}
        <button onclick="eliminarTarea(this)">Eliminar</button>
      `;

    // Agregar la tarea a la lista
    listaTareas.appendChild(nuevaTarea);

    // Limpiar el input
    tareaInput.value = "";

    // Ocultar el mensaje de error y restablecer la opacidad
    mensajeError.style.opacity = "0";
  } else {
    // Mostrar mensaje de error si el campo está vacío
    mensajeError.style.display = "block";
    mensajeError.style.opacity = "1";

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function () {
      mensajeError.style.opacity = "0";
    }, 1000);

    // Ocultar el mensaje después de 3 segundos y restablecer display a "none"
  }
}
