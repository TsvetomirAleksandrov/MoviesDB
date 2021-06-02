import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Hero.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <Jumbotron>
                <div className="heading">
                    <h1>Heading</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to="/search">
                        <Button variant="primary">Search</Button>
                    </Link>
                </div>
            </Jumbotron>
        </div >
    )
}

export default Hero;
