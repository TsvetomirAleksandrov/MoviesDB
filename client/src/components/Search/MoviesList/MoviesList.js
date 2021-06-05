import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MoviesList = (props) => {
    const user = useSelector(state => state.user)

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);

    const movieId = props.movies.id;
    const movieTitle = props.movies.title;
    const userFrom = localStorage.getItem('userId');
    const moviePoster = props.movies.poster_path;
    const movieRating = props.movies.vote_average;
    const movieDescription = props.movies.overview;
    const movieReleaseDate = props.movies.release_date;

    const variables = {
        movieId: movieId,
        movieTitle: movieTitle,
        userFrom: userFrom,
        moviePoster: moviePoster,
        movieRating: movieRating,
        movieDescription: movieDescription,
        movieReleaseDate: movieReleaseDate,
    }

    const onClickFavorite = () => {

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        if (Favorited) {
            //if we already added the movie in favorites 
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Remove From Favorite')
                    }
                })
        } else {
            //if the movie is not added to favorites
            axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Add To Favorite')
                    }
                })
        }
    }

    useEffect(() => {
        axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.subcribed)
                } else {
                    alert('Failed to get Favorite Information')
                }
            })
    }, [props])

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
                            <Card.Text className='card__button'>
                                <Button onClick={onClickFavorite} variant="outline-success">{!Favorited ? "Add to Favorite" : "Remove From Favorite"}</Button>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default MoviesList;
