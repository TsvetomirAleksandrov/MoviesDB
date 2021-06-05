import React, { useEffect, useState } from 'react';
import './Favorites.css';
import { AnimationWrapper } from 'react-hover-animation'
import { Card, CardDeck, Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Favorites = () => {
    const user = useSelector(state => state.user);
    let variable = { userFrom: localStorage.getItem('userId') };

    const [Favorites, setFavorites] = useState([]);
    // const [Loading, setLoading] = useState(true)


    useEffect(() => {
        fetchFavoredMovie();
    }, [])

    const fetchFavoredMovie = () => {
        axios.post('/api/favorite/getFavoredMovie', variable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.favorites)
                    // setLoading(false)
                    setFavorites(response.data.favorites)
                } else {
                    alert('Failed to get subscription videos')
                }
            })
    }

    if (user.userData && !user.userData.isAuth) {
        return (
            <div>
                <h3>Please sign in to see favorites tab...</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Hi {user.userData?.email}!</h2>
                <h3>Your Favorites</h3>
                <div className='movieList'>
                    {Favorites.map((movie, index) => (
                        <AnimationWrapper>
                            <CardDeck>
                                <Container>
                                    <Row >
                                        <Col>
                                            <Card>
                                                <Card.Img key={movie._id} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.moviePoster}`} />
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
}

export default Favorites;
