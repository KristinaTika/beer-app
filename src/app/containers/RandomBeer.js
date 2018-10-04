import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomBeer } from '../action-creators/actionCreators';
import './RandomBeer.css';
import SingleBeerItem from '../components/SingleBeerItem';
import Loader from '../components/Loader';
import './RandomBeer.css';
import PropTypes from 'prop-types';

class RandomBeer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fetchedBeer: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.renderRandomBeer = this.renderRandomBeer.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.fetchRandomBeer();
        this.setState({
            fetchedBeer: true
        })
    }

    renderRandomBeer() {
        const { fetchedBeer } = this.state;
        const { randomBeer } = this.props;
        if (fetchedBeer) {
            if (!randomBeer) {
                return <Loader />
            }
            return randomBeer.map((b, i) => {
                return <SingleBeerItem beer={b} key={i} />
            });
        }
    }

    render() {
        const {error} = this.props;
        return (
            <div id="random-container">
                <div id="random-button">
                    <button onClick={this.handleClick}>Click to get a random beer</button>
                </div>
                {this.renderRandomBeer()}
                <p> {error} </p>
            </div>
        );
    }
}
RandomBeer.propTypes = {
    fetchRandomBeer: PropTypes.func.isRequired,
    randomBeer: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        randomBeer: state.randomBeer,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchRandomBeer })(RandomBeer);