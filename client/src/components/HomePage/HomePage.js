import React, { useEffect } from 'react';
import Hero from '../Hero/Hero';
import Favorites from '../Favorites/Favorites';

const HomePage = (props) => {

    return (
        <div>
            <Hero />
            {/* <Favorites movies={props.movies} /> */}
        </div>
    );
}

export default HomePage;
