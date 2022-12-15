import { useState } from "react";

function Ejemplo2(){
//useState
    const [texto,setTexto] = useState("");
    function modificarParrafo(){
        setTexto("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧");
    }

    function capturaDatos(e){  // e de evento
        //e.target.value captura cada uno de los caracteres ingresados
        console.log(e.target.value);
        setTexto(e.target.value);
    }

    return(
    <> 
    <p>parrafo 1 {texto} </p>
    <input type="text" className="form-control" onChange={capturaDatos}></input>
    <button className="btn btn-success" onClick={modificarParrafo}>Modificar</button>
    </>

    );
}

export default Ejemplo2;