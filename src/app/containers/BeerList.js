import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../action-creators/actionCreators';
import Loader from '../components/Loader';
import BeerItem from '../components/BeerItem';
import './BeerList.css';
import PropTypes from 'prop-types';

class BeerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }

        this.renderBeers = this.renderBeers.bind(this);
    }

    componentDidMount() {
        this.props.fetchBeers();
    }

    renderBeers(beers) {
        return beers.map(beer => <BeerItem beer={beer} key={beer.id} />);
    }

    render() {
        const { beers, error } = this.props;
        return (
            <div id="beer-list-div">
                <p> {error} </p>
                <ul className="list-beers">
                    {beers.length === 0 ? <Loader /> : this.renderBeers(beers)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.beers,
        searchedBeers: state.searchedBeers,
        error: state.error
    }
}
BeerList.propTypes = {
    fetchBeers: PropTypes.func.isRequired,
    beers: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string
}

export default connect(mapStateToProps, { fetchBeers })(BeerList);
