import React, { Component } from 'react';
import { Header } from './components/header.commponent';
import { Footer } from './components/footer.component';
import MovieApiService from './services/movieApiService';
import { MovieApiServiceProvider } from './components/movie-api-service-context';

export default class App extends Component {
  state = {
    movieApiService: new MovieApiService()
  };
  
  render() {
    return (
      <div className="App">
        <Header/>
        <MovieApiServiceProvider value={this.state.movieApiService} >

        </MovieApiServiceProvider>
        <Footer/>
      </div>
    );
  }
};
