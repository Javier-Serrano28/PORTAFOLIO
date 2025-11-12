const Controller = {
  init() {
    this.cargarDatos();
    this.configurarFormulario();
    View.actualizarAnio();
  },

  cargarDatos() {
    View.renderDatosPersonales(Model.datosPersonales);
    View.renderProyectos(Model.proyectos);
  },

  configurarFormulario() {
    const form = document.getElementById("form-contacto");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simulación de envío
      View.mostrarMensajeEnviado();
      View.limpiarFormulario();
    });
  }
};