import { limpiarInputs } from "./eventos.js";
const tablaBody = document.getElementById("tbody");
const id = document.getElementById("id");
const nombre = document.getElementById("nombre");
const unidades = document.getElementById("unidades");
const preUnidades = document.getElementById("preUnidades");

export const mostrarProductos = async () => {
  let aux = "";
  try {
    const { data } = await axios.get(
      "http://localhost:3000/consultarProductos"
    );

      


    for (var i = 0; i <= data.length; i++) {
      aux += `<tr>
       <td>${data[i].id}</td>
       <td>${data[i].nombre}</td>
       <td>${data[i].unidades}</td>
       <td>${data[i].precio_Por_Unidad}</td>
       <td>${new Date(data[i].fecha_De_Registro)}</td>
       </tr>`;
      tablaBody.innerHTML = aux;
    }
  } catch (error) {
    console.log("Error al conectar al servidor, ", error);
  }
};

export const agregarProducto = async () => {
  const params = {
    nombre: nombre.value,
    unidades: parseInt(unidades.value),
    precio_Por_Unidad: parseFloat(preUnidades.value),
  };
  try {
    const resp = await axios.post(
      "http://localhost:3000/subirProducto",
      params
    );
    console.log(resp);
  } catch (error) {
    console.log("Can´t add product");
  }

  limpiarInputs();
};

export const eliminarProducto = async () => {
  try {
    const resp = await axios({
      url: 'http://localhost:3000/eliminarProducto',
      method: 'delete',
      data: {
        id: id.value
      }
    });
    console.log(resp);
  } catch (error) {
    alert("Error al enviar petecion", error);
  }

  limpiarInputs();
};

export const actulizarProductos = async () => {

  let params = {};
  if(nombre.value === '')
  {
   params = {
       id: id.value,
       unidades: unidades.value, 
       precio_Por_Unidad: preUnidades
   }
  }
  else if(unidades.value === '' )
  {
   params = {
     id: id.value,
     nombre: nombre.value, 
     precio_Por_Unidad: preUnidades.value
 
   }
 }
 else if(preUnidades.value === "")
 {
   params = {
     id: id.value,
     nombre: nombre.value,
     unidades: unidades.value
   }
 }
 else
 {
   params = {
     id: id.value,
     nombre: nombre.value,
     unidades: unidades.value, 
     precio_Por_Unidad: preUnidades.value
   }
 
 }

  try {
      await axios({
        url: "http://localhost:3000/actualizarProducto",
        method: 'put',
        data: params
      });

  } catch (error) {
    alert(`Error al eviar peticion: ${error}`);
  }

  limpiarInputs();
};


