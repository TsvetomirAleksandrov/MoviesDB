import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';

const MoviesList = () => {
    return (
        <div>
            <div className='card__horizontal'>
                <Row className='g-0' >
                    <Col className='card__image' md='2'>
                        <Image src='https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_.jpg' alt='...' fluid />
                    </Col>
                    <Col md='10'>
                        <Card.Body className='card__body'>
                            <Card.Title>Movie title (2019)</Card.Title>
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
