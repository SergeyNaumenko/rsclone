import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from "react-router-dom"
import { Header } from './components/header.commponent';
import { Footer } from './components/footer.component';
import  AuthPage  from './pages/AuthPage';


class App extends React.Component {
  state = {
    isAuth : false,
  }

  

  getIsAuth(isAuth:boolean){
    if (isAuth) {
      return (
        <Switch>
          <Route path="/homepage" exact>
            <header className="App-header">
            init commit
            </header>
            <Header/>
            <Footer/>
          </Route>
          <Redirect to="/homepage" />
        </Switch>
      )
    }
  
    return (
      <Switch>
        <Route path="/" exact>
          <AuthPage />
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
          {this.getIsAuth(isAuth)}
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
