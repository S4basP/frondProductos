import { actulizarProductos, agregarProducto, eliminarProducto } from "./peticiones.js";

const inpId = document.getElementById("id");
const inpNombre = document.getElementById("nombre");
const inpUnidades = document.getElementById("unidades");
const inpPreUnidades = document.getElementById("preUnidades");
const btnEvento = document.getElementById('btnEvento');
const titulo = document.getElementById('titulo');

var  evento = "Agregar";

export const eventoEliminar = () => {
  evento = "Eliminar";
  inpId.style.display = "block";
  inpNombre.style.display = "none";
  inpUnidades.style.display = "none";
  inpPreUnidades.style.display = "none";
  titulo.innerHTML = evento;
  btnEvento.innerHTML = "Eliminar";
};

export const eventoActualizar = () => {
  evento = "Actualizar";
  inpId.style.display = "block";
  inpNombre.style.display = "block";
  inpUnidades.style.display = "block";
  inpPreUnidades.style.display = "block";
  titulo.innerHTML = evento;
  btnEvento.innerHTML = "Actualizar";
};

export const eventoAgregar = () => {
  evento = "Agregar";
  inpId.style.display = "none";
  inpNombre.style.display = "block";
  inpUnidades.style.display = "block";
  inpPreUnidades.style.display = "block";
  titulo.innerHTML = evento;
  btnEvento.innerHTML = "Agregar";
};

export const cambioDeEvento = () =>
{

  

    if(evento === "Agregar")
    {
        agregarProducto();
    }
    else if (evento === "Eliminar")
    {
      eliminarProducto();
    }
    else if( evento === "Actualizar")
    {
        actulizarProductos();
    }
} 



export const limpiarInputs = () => {

  inpId.value = "";
  inpNombre.value = "";
  inpUnidades.value = "";
  inpPreUnidades.value = "";
};