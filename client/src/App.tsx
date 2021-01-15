import React, { Component } from 'react';
import { Header } from './components/header.component';
import { Footer } from './components/footer.component';
import MovieApiService from './services/movieApiService';
import { MovieApiServiceProvider } from './components/movie_service_context';
import { GenresList } from './components/movieDB-lists';

export default class App extends Component {
  state = {
    movieApiService: new MovieApiService()
  };
  
  render() {
    return (
      <div className="App">
        <Header/>
        <MovieApiServiceProvider value={this.state.movieApiService} >
          <GenresList/>
        </MovieApiServiceProvider>
        <Footer/>
      </div>
    );
  }
};
