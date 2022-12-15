import { Button } from "bootstrap";
import React, {Component} from"react";

class Ejemplo extends Component{
    constructor(props){
        super(props);
        this.state={
            encendido: "on"
        }
    }

    cambiarEstado =() =>{
        if(this.state.encendido==="on"){
            this.setState({
                encendido: "off"
            });
        } else {
            this.setState({
                encendido: "on"
            })
        }
    }

    render(){
        return(
            <>
            <p>Estado de la luz : {this.state.encendido}</p>
            <button onClick={()=> alert("( ͡° ͜ʖ ͡°)")} type="button" className="btn btn-primary">Click me ( ͡° ͜ʖ ͡°)</button>
            <button onClick={this.cambiarEstado} type="button" className="btn btn-primary">Click me 2 ( ͡° ͜ʖ ͡°)</button>
            </>
        );
    }
}

export default Ejemplo;