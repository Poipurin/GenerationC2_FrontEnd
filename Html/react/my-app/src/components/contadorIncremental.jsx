import React, {Component} from "react";

class ContadorIncremental extends Component {

    constructor(props){
        super(props);
        this.state={
            numero: 0 }
        }

        cambiarNumero =() =>{
                this.setState({
                    numero: this.state.numero+1
                });
            
        
        }

        render (){
            return(
                <>
                <p>Veces que apretaste el botón : {this.state.numero}</p>
            <button onClick={this.cambiarNumero} type="button" className="btn btn-primary">Apriétame ( ͡° ͜ʖ ͡°)</button>
            
                </>
            )
        }

}

export default ContadorIncremental;