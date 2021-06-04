import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';

const MoviesList = (props) => {
    return (
        <div>
            <div className='card__horizontal'>
                <Row>
                    <Col className='card__image' md='2'>
                        <Image src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movies.poster_path}`} alt='...' fluid />
                    </Col>
                    <Col md='10'>
                        <Card.Body className='card__body'>
                            <Card.Title>{`${props.movies.title}  (${props.movies.release_date})`} </Card.Title>
                            <Card.Text>
                                <small className='text-muted'>Rating | {props.movies.vote_average}</small>
                            </Card.Text>
                            <Card.Text>
                            {props.movies.overview}
            </Card.Text>
                            <Card.Text>
                                {/* <a href='www.google.com'><p>Visit official site</p></a> */}
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
