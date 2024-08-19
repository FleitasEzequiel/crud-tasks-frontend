import { obtenerTareas, agregarTarea } from "./utilidades.js";
import "@material/web/fab/fab.js";
import "@material/web/dialog/dialog.js";
import "@material/web/iconbutton/filled-icon-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/field/filled-field.js";
import "@material/web/fab/branded-fab.js";
import "@material/web/switch/switch.js";
import { dibujarTarea } from "./tareas.js";
const boton = document.getElementById("boton");
const divLista = document.getElementById("listaTareas");

document.addEventListener("DOMContentLoaded", async (req, res) => {
  const tareas = await obtenerTareas();
  const lista = await tareas.json();
  lista.forEach((element) => {
    divLista.appendChild(dibujarTarea(element));
  });
});
boton.addEventListener("click", async () => {
  const titulo = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  document.getElementById("popup").setAttribute("open", "");
});

document.querySelector("#ok").addEventListener("click", async (req, res) => {
  document.getElementById("popup").toggleAttribute("open", false);
  console.log("hiciste click man");
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const info = { title, description };
  const respuesta = await agregarTarea(info);
  console.log(respuesta);
});
