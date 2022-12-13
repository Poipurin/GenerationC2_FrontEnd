import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import rick1 from '../styles/img/d411fd39-0622-443e-8082-8783ccf386c8.webp';
import rick2 from '../styles/img/rickroll_4k-1024x768.webp';
import rick3 from '../styles/img/rick-astley-never-gonna-give-you-up-meme.gif';


class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={rick1}
                        height="650px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Never gonna give you up</h3>
                        <p>Never gonna let you down</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={rick2}
                        height="650px"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Never gonna run around and desert you</h3>
                        <p>Never gonna make you cry</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={rick3}
                        height="650px"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Never gonna say goodbye</h3>
                        <p>
                        Never gonna tell a lie and hurt you
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );

    }
}

export default Slider;