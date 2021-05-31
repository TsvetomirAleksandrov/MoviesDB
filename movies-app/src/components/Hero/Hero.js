import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return (
        <div>
            <Jumbotron>
                <div className="heading">
                <h1>Heading</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                    <p>
                        <Button variant="primary">Search</Button>
                    </p>
                </div>
            </Jumbotron>
        </div>
    )
}

export default Hero;
