import { agregarProducto, eliminarProducto } from "./peticiones.js";
import { cambioDeEvento, eventoActualizar, eventoAgregar, eventoEliminar} from './eventos.js';

const btnEvento = document.getElementById('btnEvento');
const btnEliminar = document.getElementById('btnEliminar');
const btnActualizar = document.getElementById('btnActualizar');
const btnAgregar = document.getElementById('btnAgregar');


btnEliminar.addEventListener('click', eventoEliminar);

btnActualizar.addEventListener('click', eventoActualizar);

btnAgregar.addEventListener('click', eventoAgregar);



btnEvento.addEventListener( 'click', cambioDeEvento);



