const View = {
  renderDatosPersonales(data) {
    document.getElementById("nombre").textContent = data.nombre;
    document.getElementById("profesion").textContent = data.profesion;
    document.getElementById("descripcion").textContent = data.descripcion;
    document.getElementById("foto-perfil").src = data.foto;
  },

  renderProyectos(proyectos) {
    const contenedor = document.getElementById("lista-proyectos");
    contenedor.innerHTML = "";

    proyectos.forEach(proyecto => {
      const div = document.createElement("div");
      div.className = "proyecto";
      div.innerHTML = `
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <p><strong>Tecnologías:</strong> ${proyecto.tecnologias}</p>
        <a href="${proyecto.enlace}" target="_blank">Ver proyecto →</a>
      `;
      contenedor.appendChild(div);
    });
  },

  mostrarMensajeEnviado() {
    const mensaje = document.getElementById("mensaje-enviado");
    mensaje.classList.remove("hidden");
    setTimeout(() => {
      mensaje.classList.add("hidden");
    }, 3000);
  },

  limpiarFormulario() {
    document.getElementById("form-contacto").reset();
  },

  actualizarAnio() {
    document.getElementById("anio").textContent = new Date().getFullYear();
  }
};