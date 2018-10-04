import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchedBeers } from '../action-creators/actionCreators';
import './Search.css';
import BeerItem from '../components/BeerItem';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { inputValue } = this.state;
        this.props.fetchSearchedBeers(inputValue);
    }

    renderSearchedBeers = () => {
        let renderSearch = <ul className="list-beers">Search some beers</ul>
        const { beers } = this.props;
        if (!beers) {
            return renderSearch;
        }
        if (beers.length === 0) {
            return renderSearch = <img src="https://webmarketingschool.com/wp-content/uploads/2018/03/nojobsfound.png" id="no-results" alt="Oops! No results found." />
        }
        return beers.map((beer) => {
            return <BeerItem beer={beer} key={beer.id} />
        });
    }

    render() {
        const { error } = this.props;
        return (
            <div id="search-list-div" >
                <form onSubmit={this.handleSubmit}>
                    <input type="search" placeholder="Search beers by name" name="inputValue" onChange={this.handleChange} />
                </form>
                <div className="list-beers">
                    {this.renderSearchedBeers()}
                </div>
                <p> {error} </p>
            </div>
        );
    }
}
Search.propTypes = {
    fetchSearchedBeers: PropTypes.func.isRequired,
    beers: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        beers: state.searchedBeers,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSearchedBeers })(Search);