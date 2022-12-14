import React,{Component} from 'react';
import Subcontainer from './subcontainer';
import Advertisement from './advertisement'; //el padre contiene a los hijos
class Container extends Component {
    render(){
        return(
            <div>
                
                <Subcontainer categoria={this.props.categoria}/>
                <Advertisement/>
            </div>
        );
        
    }
}

export default Container;