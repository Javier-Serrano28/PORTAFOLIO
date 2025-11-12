// === BOTÓN DE MODO OSCURO/CLARO ===
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleButton.textContent = "🌙";
} else {
  toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️";
  }
});
