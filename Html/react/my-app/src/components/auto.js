import React, { useState, useEffect } from 'react';
import { getAllAutos } from "../services/AutoServices";

//3.-creando o inicializando un objeto
const autoInicial = [
    {
        id: 1,
        marca: "",
        color: ""

    }
];
//2.-definir el objeto
const AutoComponent = () => {
    const [autos, setAutos] = useState(autoInicial);
    //llamado a la API
    const obtenerAutos = async () => {
        setAutos(await getAllAutos());
    }
    //Ejecuta una funcion segun el momento de ciclo de vida
    useEffect(
        () => { obtenerAutos() }, []
    );

    const idAutos = autos.map(au =>
        <p key={au.id}>{au.id}</p>
    )
    const nombreAutos = autos.map(au =>
        <p key={au.id}>{au.nombre}</p>
    )
    const colorAutos = autos.map(au =>
        <p key={au.id}>{au.color}</p>
    )
    const marcaAutos = autos.map(au =>
        <p key={au.id}>{au.marca}</p>
    )
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Color</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{idAutos}</th>
                    <td>{marcaAutos}</td>
                    <td>{colorAutos}</td>
                </tr>
            </tbody>
        </table>
    )


    /*return (
        <>
            <p>respuesta de la api:</p>
            {autos.map(au =>

                <p key={au.id}>{au.marca} {au.color}</p>)}

            {//Investigar el uso de map en react y traspaso del mismo objeto a un componente e imprimir en la página
                //autos.map(au=> {au.id})
            }
        </>
    );*/
}

export default AutoComponent;