//axios
// axios
// libreria encargada de hacer las peticiones
import axios from 'axios';
// *establecer la ruta por default
const rutaBase = "http://localhost:9080/api2/";
// *función de llamado
// peticion asincronica se ejecuta en cualquier momento
const getAllAutos = async () => {
    const respuesta = await axios.get(rutaBase + "autos/getall");
    console.log(respuesta.data);
    return respuesta.data;
}
const getAutos = async (id) => {
    const respuesta = await axios.get(rutaBase + "obtener/auto/" + id);
    console.log(respuesta.data);
    return respuesta.data;
}

export {getAllAutos, getAutos}