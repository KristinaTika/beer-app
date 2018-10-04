import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import BeerList from './containers/BeerList';
import SingleBeer from './containers/SingleBeer';
import About from './components/About';
import FavoriteBeer from './components/FavoriteBeer';
import RandomBeer from './containers/RandomBeer';
import Search from './containers/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route path="/home" component={BeerList} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/search-beer" component={Search} />
          <Route path="/beers/:id" component={SingleBeer} />
          <Route path="/about" component={About} />
          <Route path="/favorites" component={FavoriteBeer} />
          <Redirect from="/" to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
