import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header.component';
import Footer from './components/footer.component';
import AuthPage from './pages/AuthPage';
import config from './config';
import MovieApiService from './services/movieApiService';
import { MovieApiServiceProvider } from './components/movie_service_context';
import GenresList from './components/movieDB-lists';
import { HomepageComponent } from './pages';

interface MyState {
  isAuth: boolean;
  jwtToken: any;
  id: any;
}
export default class App extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      movieApiService: new MovieApiService(),
      isAuth: false,
      jwtToken: null,
      id: null,
    };
  }

  componentDidMount() {
    const data: any = localStorage.getItem(config.localName);
    const a = JSON.parse(data);
    if (a && a.token) {
      this.login(a.token, a.userId);
    }
  }

  login = (jwtToken: string, userId: string): any => {
    console.log(jwtToken, userId);
    localStorage.setItem(
      config.localName,
      JSON.stringify({
        userId,
        token: jwtToken,
      })
    );
    this.setState({
      id: userId,
      jwtToken,
      isAuth: true,
    });
  };

  logout = (): any => {
    this.setState({
      isAuth: false,
      jwtToken: null,
      id: null,
    });
    localStorage.removeItem(config.localName);
  };

  routess(isAuth: boolean) {
    if (isAuth) {
      return (
        <Switch>
          <Route path="/homepage" exact>
            <Header logout={this.logout} />
            <MovieApiServiceProvider value={this.state.movieApiService}>
              <GenresList />
            </MovieApiServiceProvider>
            <Footer />
          </Route>
          <Redirect to="/homepage" />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path="/" exact>
          <AuthPage login={this.login} />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  render() {
    const { isAuth } = this.state;

    return (
/*
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
*/
      <BrowserRouter>
        <div className="App">{this.routess(isAuth)}</div>
      </BrowserRouter>
    );
  }
}
