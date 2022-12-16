import { useState } from "react";

function Ejemplo2(){
//useState
    const [texto,setTexto] = useState("");
    const [captura, setCaptura] =useState(null);

    function modificarParrafo(){
        setTexto(captura);
    }

    function capturaDatos(e){  // e de evento
        //e.target.value captura cada uno de los caracteres ingresados
        console.log(e.target.value);
        setTexto(capturarBoton);
    }
    
    function capturarBoton(e){
        setCaptura(e.target.value);
    }

    return(
    <> 
    <p>parrafo 1 {texto} </p>
    <input type="text" className="form-control" onChange={capturarBoton}></input>
    <button className="btn btn-success" onClick={modificarParrafo}>Modificar</button> 
    </>

    );
}

export default Ejemplo2;