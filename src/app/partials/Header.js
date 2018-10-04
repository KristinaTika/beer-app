import React from 'react';
import { Link } from 'react-router-dom';
import './Partials.css';

const Header = (props) => { 
    
    return (
        <header>
            <h2>Beer Lover </h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/random-beer">Get Random Beer</Link>
                <Link to="/search-beer">Search Beers</Link>
                <Link to="/favorites">Favorite</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;