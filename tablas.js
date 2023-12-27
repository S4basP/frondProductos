
import { mostrarProductos } from './src/peticiones.js';
const generarReporte = document.querySelector('#generarReporte'); 
mostrarProductos();
generarReporte.addEventListener('click', ()=>
{
    ExcellentExport.csv(generarReporte, 'datatable');
});