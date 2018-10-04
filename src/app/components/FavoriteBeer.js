import React from 'react';
import './FavoriteBeer.css';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const FavoriteBeer = (props) => {

    const beer = JSON.parse(localStorage.getItem("redux-fav-beer"));
    if (!beer) {
        return <Loader />
    }

    return (
        <li id="beer-item-li">
            <div>{beer.name}</div>
            <div>
                <img src={beer.image_url} alt={beer.name} className="beer-img" />
                <p>{beer.abv}% alc</p>
                <button className="favorite-beer" disabled>Favorite</button>
            </div>
            <div >
                <p className="fav-description">{beer.description}</p>
                <Link to={"/beers/" + beer.id} className="div2-div">Read More</Link>
            </div>
        </li>
    );
};

export default FavoriteBeer;