import React from 'react';
import '../Search/Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import MovieReview from './MovieReview/MovieReview';

const MovieDetails = (props) => {

    return (
        <div className='card__wrapper'>
            <div>
                <div className='card__horizontal'>
                    <Row>
                        <Col className='card__image' md='2'>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfLgli3FS-u3L4u6_q0PZqMpGjNmXuh2RVw&usqp=CAU" alt='...' fluid />
                        </Col>
                        <Col md='10'>
                            <Card.Body className='card__body'>
                                <Card.Title>Title</Card.Title>
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
                        <MovieReview />
                    </Row>
                </div>

            </div>


        </div>
    );
}

export default MovieDetails;
