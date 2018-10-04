import React, { Component } from 'react';
import './BeerItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BeerItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favBeer: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        const { favBeer } = this.state;
        const { beer } = this.props;
        this.setState({ favBeer: true });

        localStorage.setItem("redux-fav-beer", JSON.stringify(beer));
        this.setState({ favBeer: !favBeer });
    }

    render() {
        const { name, image_url, abv, description, id } = this.props.beer;
        const { favBeer } = this.state;
        return (
            <li className="beer-item-li">
                <h3>{name}</h3>
                <div>
                    <img src={image_url} alt={name} className="beer-img" />
                    <p>{abv}% alc</p>
                    <button onClick={this.handleClick} className={favBeer ? "favorite-beer" : ""}>Favorite</button>
                </div>
                <div className="read-more-button">
                    <p>{description}</p>
                    <Link to={"/beers/" + id}>Read More</Link>
                </div>
            </li>
        );
    }
};
BeerItem.propTypes = {
    beer: PropTypes.object.isRequired
}

export default BeerItem;