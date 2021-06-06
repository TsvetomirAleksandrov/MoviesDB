import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import './MovieReview.css';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MovieReview = (props) => {
    const user = useSelector(state => state.user);

    const [Comment, setComment] = useState("");
    const [Rating, setRating] = useState();
    const [CommentList, setCommentLists] = useState([]);

    const movieVariable = {
        movieId: props.movieId
    }

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onRatingChanged = (newRating) => {
        setRating(newRating);

        const ratingVariable = {
            rating: newRating,
            writer: user.userData._id,
            movieId: props.movieId
        }

        axios.post('/api/ratings/saveRating', ratingVariable)
            .then(response => {
               console.log(response);
            })
    };

    const onCommentSubmit = (e) => {
        e.preventDefault();

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        const variables = {
            content: Comment,
            writer: user.userData._id,
            movieId: props.movieId
        }

        axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    setComment("");
                } else {
                    alert('Failed to save Comment');
                }
            })
    }

    useEffect(() => {

        axios.post('/api/ratings/getRating', movieVariable)
            .then(response => {
                if (response.data.success) {
                    setRating(response.data.rating)
                } else {
                    alert('Failed to get comments Info')
                }
            })


        axios.post('/api/comment/getComments', movieVariable)
            .then(response => {
                if (response.data.success) {
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get comments Info')
                }
            })

    }, [])

    const value = Rating;
    console.log(value);

    return (
        <div className='movieReview'>
            <div className='movieReviewTitle'>
                <h2>Your Review</h2>
            </div>

            <div className='ratingStars'>
                <ReactStars
                    value={3}
                    count={5}
                    onChange={onRatingChanged}
                    size={50}
                    activeColor="#ffd700"
                />
            </div>
            <div className='textField'>
                <Form onSubmit={onCommentSubmit}>
                    <Form.Group>
                        {CommentList && CommentList.map((comment, index) => (
                            <Alert variant="success">
                                {comment.content}
                            </Alert>
                        ))}
                        <Form.Control as="textarea" onChange={handleChange} value={Comment} placeholder="Your private notes and comments about the movie..." cols={80} rows={5} />
                    </Form.Group>
                    <Button onClick={onCommentSubmit}>Submit</Button>
                </Form>

            </div>
        </div>
    );
}

export default MovieReview;
