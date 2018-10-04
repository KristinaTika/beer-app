import React, { Component } from 'react';
import Loader from '../components/Loader';
import './SingleBeer.css';
import { fetchSingleBeer } from '../action-creators/actionCreators';
import { connect } from 'react-redux';
import SingleBeerItem from '../components/SingleBeerItem';
import PropTypes from 'prop-types';

class SingleBeer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beer: {},
        }

        this.renderSingleBeer = this.renderSingleBeer.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSingleBeer(id);
    }

    renderSingleBeer() {
        const { beer } = this.props;

        if (!beer) {
            return <Loader />
        }
        return beer.map((b, i) => {
            return <SingleBeerItem beer={b} key={i} />
        });
    }

    render() {
        const { error } = this.state;
        return (
            <div>
                {this.renderSingleBeer()}
                <p> {error} </p>
            </div>
        );
    }
}
SingleBeer.propTypes = {
    fetchSingleBeer: PropTypes.func.isRequired,
    beer: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        beer: state.beer,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSingleBeer })(SingleBeer);
