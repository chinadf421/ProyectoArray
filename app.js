// Obtener usuarios desde localStorage o usar predeterminados
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Carlos" },
];

// Mostrar saludo personalizado usando localStorage
function mostrarSaludo() {}
const nombreGuardado = localStorage.getItem("nombre");
const saludo = document.getElementById("saludo");
if (nombreGuardado) {
  saludo.textContent = `Bienvenido. El último usuario ingresado es: ${nombreGuardado}.`;
} else {
  if (nombreGuardado) {
    saludo.textContent = "Bienvenido. ¿Deseas agregar un nuevo usuario?.";
  }
}

// Mostrar usuarios en pantalla
function mostrarUsuarios() {
  const lista = document.getElementById("lista-usuarios");
  lista.innerHTML = "";
  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${usuario.id} - Nombre: ${usuario.nombre}`;
    lista.appendChild(li);
  });
}

// Agregar usuario nuevo desde el formulario
document
  .getElementById("form-usuario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const carrera = document.getElementById("carrera").value.trim();

    if (nombre && edad && correo && carrera) {
      // Guardar nombre en localStorage
      localStorage.setItem("nombre", nombre);

      // Agregar usuario a la matriz
      const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: nombre,
        edad: edad,
        correo: correo,
        carrera: carrera,
      };
      usuarios.push(nuevoUsuario);

      // Guardar la matriz completa en localStorage
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Actualizar saludo y lista
      mostrarSaludo();
      mostrarUsuarios();

      // Limpiar el formulario
      this.reset();
    }
  });

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  mostrarSaludo();
  <button type="submit"> mostrarUsuarios </button>;

  // al apretar botón mostrar usuarios mostrarUsuarios();
  const mostrarUsuariosButton = document.getElementById("mostrar-usuarios");
  mostrarUsuarios();
});
