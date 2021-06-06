import React, { useEffect, useState } from 'react';
import '../Search/Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import MovieReview from './MovieReview/MovieReview';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MovieDetails = ({ match }) => {
    const user = useSelector(state => state.user);
    const movieId = match.params.movieId;
    const [movie, setMovie] = useState([{}]);
    const [Favorited, setFavorited] = useState(false);

    const movieVariable = {
        movieId: movieId
    }

    const variables = {
        movieId: movie.movieTitle,
        movieTitle: movie.movieTitle,
        userFrom: movie.userFrom,
        moviePoster: movie.moviePoster,
        movieRating: movie.movieRating,
        movieDescription: movie.movieDescription,
        movieReleaseDate: movie.movieReleaseDate,
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
                        // setFavoriteNumber(FavoriteNumber - 1)
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
                        // setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Add To Favorite')
                    }
                })
        }
    }

    useEffect(() => {
        axios.post('/api/favorite/getFavorite', movieVariable)
            .then(response => {
                if (response.data.success) {
                    setMovie(response.data.favorite[0])
                } else {
                    alert('Failed to get comments Info')
                }
            })

            axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.subcribed)
                } else {
                    alert('Failed to get Favorite Information')
                }
            })
    }, [user])

    return (
        <div className='card__wrapper'>
            <div>
                <div className='card__horizontal'>
                    <Row>
                        <Col className='card__image' md='2'>
                            <Image src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.moviePoster}`} alt='...' fluid />
                        </Col>
                        <Col md='10'>
                            <Card.Body className='card__body'>
                                <Card.Title>{movie.movieTitle}  ({movie.movieReleaseDate})</Card.Title>
                                <Card.Text>
                                    <small className='text-muted'>Rating | {movie.movieRating}</small>
                                </Card.Text>
                                <Card.Text>
                                    {movie.movieDescription}
                                </Card.Text>
                                <Card.Text className='card__button'>
                                <Button onClick={onClickFavorite} variant="outline-success">{!Favorited ? "Add to Favorite" : "Remove From Favorites"}</Button>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <MovieReview movieId={movieId} />
                    </Row>
                </div>

            </div>


        </div>
    );
}

export default MovieDetails;
