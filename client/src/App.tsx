import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header.component';
import Footer from './components/footer.component';
import AuthPage from './pages/AuthPage';
import { UserContextProvider } from './context/login-context';
//import ProfilePage from './pages/ProfilePage';
import config from './config';
import MovieApiService from './services/movieApiService';
import { MovieApiServiceProvider } from './components/movie_service_context';
import {
  HomepageComponent,
  MoviePageComponent,
  ListpageComponent,
  ProfilePage,
  Watchlist,
  RatingPage,
  GenresPage,
} from './pages';
import ServerApi from './services/serverApi';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';


interface MyState {
  movieApiService: any;
  serverApi:any,
  isAuth: boolean;
  jwtToken: any;
  id: any;
}
export default class App extends Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      movieApiService: new MovieApiService(),
      serverApi : new ServerApi(),
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

  render() {
    const { isAuth,id,jwtToken } = this.state;
    console.log(isAuth);
    if (!isAuth){
      return (
        <BrowserRouter>
        <UserContextProvider value={{jwtToken,id,isAuth,login:this.login,logout:this.logout,serverApi:this.state.serverApi}}>
          <Switch>
            <Route path="/" exact>
              <AuthPage />
            </Route>
            <Redirect to="/" />
          </Switch>
          </UserContextProvider>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <UserContextProvider value={{jwtToken,id,isAuth,login:this.login,logout:this.logout,serverApi:this.state.serverApi}} >
        <div className="App">
          <Header/>
          <main>
            <MovieApiServiceProvider value={this.state.movieApiService} >

                <Switch>
                  <Route path="/profile" exact>
                    <ProfilePage />
                  </Route>
                  <Route path="/watchlist" exact>
                    <Watchlist />
                  </Route>
                  <Route path="/rating" exact>
                    <RatingPage />
                  </Route>
                  <Route path="/" exact component={HomepageComponent}/>
                  <Route path="/list/:listName?" exact component={ListpageComponent}/>
                  <Route path="/movie/:id?" exact component={MoviePageComponent}/>
                  <Route path="/genres/:id?" exact component={GenresPage}/>
                  <Route render={() => <h4>Page not found</h4>} />
                </Switch>

            </MovieApiServiceProvider>
          </main>
          <Footer/>
        </div>
        </UserContextProvider>
      </BrowserRouter>
    );
  }
}
