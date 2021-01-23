import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Header } from './components/header.component';
import { Footer } from './components/footer.component';
import  AuthPage  from './pages/AuthPage';
import config from './config';
import MovieApiService from './services/movieApiService';
import { MovieApiServiceProvider } from './components/movie_service_context';
import { GenresList } from './components/movieDB-lists';

interface MyState{
  isAuth:boolean,
  jwtToken:any,
  id:any
}
export default class App extends React.Component<any,MyState> {
  state = {
    movieApiService: new MovieApiService(),
    isAuth: false,
    jwtToken: null,
    id: null
  }
  componentDidMount(){
    const data:any = localStorage.getItem(config.localName);
    const login = JSON.parse(data);
    if (login && login.token) {
      this.login(login.token, login.userId);
    } 
  }

  login = (jwtToken:string, userId:string):any => {
    this.setState({
      id: userId, jwtToken: jwtToken,
      isAuth:true
    })
    localStorage.setItem(config.localName, JSON.stringify({
      userId: userId, token: jwtToken
    }))
  }


  logout = ():any => {
    this.setState({
      isAuth: false,
      jwtToken:null,id:null
    });
    localStorage.removeItem(config.localName);
  }

  routess(isAuth:boolean){
    if (isAuth) {
      return (
        <Switch>
          <Route path="/homepage" exact>
            <Header logout = {this.logout}/>
            <MovieApiServiceProvider value={this.state.movieApiService} >
              <GenresList/>
            </MovieApiServiceProvider>
            <Footer/>
          </Route>
          <Redirect to="/homepage" />
        </Switch>
      )
    }
  
    return (
      <Switch>
        <Route path="/" exact>
          <AuthPage login = {this.login}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }

  render(){ 
    const { isAuth } = this.state;
    

    return (
      <BrowserRouter>
        <div className="App">
          {this.routess(isAuth)}
        </div>
      </BrowserRouter>
    );
  }
}
