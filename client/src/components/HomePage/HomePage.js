import React, { useEffect } from 'react';
import Hero from '../Hero/Hero';
import Favorites from '../Favorites/Favorites';
import { API_URL, API_KEY } from '../Config';

const HomePage = (props) => {
   
    useEffect(() => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
    }, [])

    return (
        <div>
            <Hero />
            <Favorites movies={props.movies} />
        </div>
    );
}

export default HomePage;
