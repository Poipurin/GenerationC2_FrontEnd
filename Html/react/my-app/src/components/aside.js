import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/css/aside.css';


class Aside extends Component {
    render() {
        return (<div className='Sidebar'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../styles/img/image (6).png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
        );

    }
}

export default Aside;