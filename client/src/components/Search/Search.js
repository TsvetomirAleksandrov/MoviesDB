import React from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import MoviesList from './MoviesList/MoviesList';

const Search = (props) => {
    return (
        <div>
            <div className='search'>
                <h1>Search</h1>
                <div className='search__form'>
                    <Form inline>
                        <FormControl value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} type="text" placeholder="Search by movie title..." className="mr-sm-3" />
                        <Button type='submit' variant="outline-success">Search</Button>
                    </Form>
                </div>
            </div>

            <div className='card__wrapper'>
                {props.movies.map((movie, index) => (
                    <MoviesList movies={movie} />
                ))}
            </div>
        </div>
    )
}

export default Search;
