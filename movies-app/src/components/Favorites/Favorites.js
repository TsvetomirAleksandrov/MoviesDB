import React from 'react';
import './Favorites.css';
import { AnimationWrapper } from 'react-hover-animation'
import { Card, CardDeck, Container, Col, Row } from 'react-bootstrap';

const Favorites = (props) => {
    return (
        <div>
            <h1>Your Favorites</h1>
            <div className='movieList'>
            {props.movies.map((movie, index) => (
                <AnimationWrapper>
                    <CardDeck>
                        <Container>
                            <Row >
                                <Col>
                                    <Card>
                                        <Card.Img src={movie.Poster} />
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </CardDeck>
                </AnimationWrapper>
            ))}
            </div>
        </div>
    )
}

export default Favorites;
