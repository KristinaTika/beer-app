import React from 'react';
import PropTypes from 'prop-types';

const SingleBeerItem = (props) => {

    const { beer } = props;

    const renderFoodPairing = food => food.map((f, i) =>  <li key={i}>{f}</li>);
    
    const renderIngredients = names => (names.map((h, i) => (<li key={i}>{h.name}, {h.amount.value} {h.amount.unit}</li>)));

    return (
        <div id="fav-beer-div">
            <div>
                <img src={beer.image_url} alt={beer.name} />
            </div>
            <div>
                <h2>{beer.name}, {beer.abv}%alc</h2>
                <h4><q>{beer.tagline}</q></h4>
                <h4>Description:</h4>
                <p>{beer.description}</p>
                <h4>Brewer Tips:</h4>
                <p>{beer.brewers_tips}</p>
                <h4>Recommended food:</h4>
                <ul>{renderFoodPairing(beer.food_pairing)}</ul>
                <h4>Ingredients:</h4>
                <ol>
                    <li>
                        <ol id="hops">
                            <b><i>Hops:</i></b>
                            {renderIngredients(beer.ingredients.hops)}
                        </ol>
                    </li>
                    <li>
                        <ol id="malt">
                            <b><i>Malt:</i></b>
                            {renderIngredients(beer.ingredients.malt)}
                        </ol>
                    </li>
                    <li>
                        <ul id="yeast">
                            <b>Yeast:</b>
                            <li>{beer.ingredients.yeast}</li>
                        </ul>
                    </li>
                </ol>
                <h4>Contributed by:</h4>
                <p>{beer.contributed_by}</p>
            </div>
        </div>
    );
};
SingleBeerItem.propTypes = {
    beer: PropTypes.object.isRequired
}

export default SingleBeerItem;

