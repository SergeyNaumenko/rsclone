import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Header } from './components/header.commponent';
import { Footer } from './components/footer.component';
import  AuthPage  from './pages/AuthPage';
import config from './config';

interface MyState{
  isAuth:boolean,
  jwtToken:any,
  id:any
}
class App extends React.Component<any,MyState> {
  state = {
    isAuth: false,
    jwtToken: null,
    id: null
  }
  componentDidMount(){
    const data:any = localStorage.getItem(config.localName);
    const a = JSON.parse(data);
    if (a && a.token) {
      this.login(a.token, a.userId);
    } 
  }

  login = (jwtToken:string, userId:string):any => {
    console.log(jwtToken,userId);
    localStorage.setItem(config.localName, JSON.stringify({
      userId: userId, token: jwtToken
    }))
    this.setState({
      id: userId, jwtToken: jwtToken,
      isAuth:true
    })
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
            <header className="App-header">
            init commit
            </header>
            <Header logout = {this.logout}/>
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
};

export default App;
