import ReactStars from "react-rating-stars-component";
import React from "react";
import './MovieReview.css';
import { Form } from 'react-bootstrap';

const MovieReview = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className='movieReview'>
            <div className='movieReviewTitle'>
            <h2>Your Review</h2>
            </div>
            
            <div className='ratingStars'>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={50}
                    activeColor="#ffd700"
                />
            </div>
            <div className='textField'>
                <Form>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" placeholder="Your private notes and comments about the movie..." cols={80} rows={5} />
                    </Form.Group>
                </Form>
            </div>

        </div>
    );
}

export default MovieReview;
