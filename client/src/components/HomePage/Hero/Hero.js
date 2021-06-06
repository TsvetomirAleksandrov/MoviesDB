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
                    <h1>The Martian</h1>
                    <p>
                    An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.
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
