import React from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import MoviesList from './MoviesList/MoviesList';

const Search = () => {
    return (
        <div>
            <div className='search'>
                <h1>Search</h1>
                <div className='search__form'>
                    <Form inline>
                        <FormControl type="text" placeholder="Search by movie title..." className="mr-sm-3" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
            </div>

            <div className='card__wrapper'>
                <MoviesList />
                <MoviesList />
            </div>
        </div>
    )
}

export default Search;
