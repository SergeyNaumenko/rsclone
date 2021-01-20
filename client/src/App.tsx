import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header.component';
import { Footer } from './components/footer.component';
import MovieApiService from './services/movieApiService';
import { MovieApiServiceProvider } from './components/movie_service_context';
import { HomepageComponent } from './pages';
import { GenresList } from './components/movieDB-lists';

export default class App extends Component {
  state = {
    movieApiService: new MovieApiService()
  };
  
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="row">
          <MovieApiServiceProvider value={this.state.movieApiService} >
            <Router>
              <Switch>
                <Route path="/" exact component={HomepageComponent}/>
                <Route path="/list/:listName?" exact component={HomepageComponent}/>

                <Route path="/genres/:genre?" exact component={GenresList}/>
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </Router>
          </MovieApiServiceProvider>
        </main>
        <Footer/>
      </div>
    );
  }
};
