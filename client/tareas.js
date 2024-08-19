export {} from "./utilidades.js";
export const dibujarTarea = (info) => {
  //Div
  const $tarea = document.createElement("div");
  $tarea.classList.add("mdc-card");
  $tarea.classList.add("mdc-card__square");

  //Titulo
  const $titulo = document.createElement("h2");
  $titulo.innerText = info.title;

  //Descripción
  const $descripcion = document.createElement("p");
  $descripcion.innerText = info.description;

  //Botones
  const $botones = document.createElement("div");
  const $botonEliminar = document.createElement("md-filled-icon-button");
  //Unión de todos los elementos
  $tarea.appendChild($titulo);
  $tarea.appendChild($descripcion);
  $tarea.appendChild($botonEliminar);
  return $tarea;
};
