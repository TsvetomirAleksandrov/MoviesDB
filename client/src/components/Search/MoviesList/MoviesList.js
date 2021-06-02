import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';

const MoviesList = (props) => {
    return (
        <div>
            <div className='card__horizontal'>
                <Row>
                    <Col className='card__image' md='2'>
                        <Image src={props.movies.Poster} alt='...' fluid />
                    </Col>
                    <Col md='10'>
                        <Card.Body className='card__body'>
                            <Card.Title>{props.movies.Title}</Card.Title>
                            <Card.Text>
                                <small className='text-muted'>Drama, Thriller | 90 minutes</small>
                            </Card.Text>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident eligendi rem consectetur molestias eos natus fugiat unde, vero laborum.
            </Card.Text>
                            <Card.Text>
                                <a href='www.google.com'><p>Visit official site</p></a>
                            </Card.Text>
                            <Card.Text className='card__button'>
                                <Button variant="outline-success">Add To Favorites</Button>
                            </Card.Text>

                        </Card.Body>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default MoviesList;
