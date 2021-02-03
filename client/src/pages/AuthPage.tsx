/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import withUser from '../components/hoc/withUser';


class AuthPage extends React.Component <any,any>{
    
    state = {
        login:'',
        password:'',
        serverApi: this.props.prop.serverApi
    }

    regHandler = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,url:string) => {
        try {
          e.preventDefault();
          const { serverApi, login ,password } = this.state;
          const data = await serverApi.registerAndLogin(url, login, password);
          console.log(data);
          M.toast({html: data.message})
          return data;
        } catch (error) {
          M.toast({html: error})
        }
    }

    loginHandler = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,url:string) => {
      try {
        e.preventDefault();
        const { serverApi, login ,password } = this.state;
        const data = await serverApi.registerAndLogin(url, login, password);
        if(!!data.token){
          this.props.prop.login(data.token, data.userId)
        }else{
          M.toast({html: data.message})
        };
        return data;
      } catch (error) {
        M.toast({html: error})
      }
  }
    render(){
      return (
        <div className="row">
          <div className="col s6 offset-s3">
            <div className="card teal lighten-5">
              <div className="card-content black-text">
                <span className="card-title">Авторизация</span>
                <div>
                  <div className="input-field">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      className="validate"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({login:e.target.value})}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
    
                  <div className="input-field">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="validate"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({password:e.target.value})}
                    />
                    <label htmlFor="password">Пароль</label>
                  </div>
    
                </div>
              </div>
              <div className="card-action">
                <button
                  className="btn deep-purple accent-1"
                  style={{marginRight: 10}}
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.loginHandler(e,`/api/login`)}
                >
                  Войти
                </button>
                <button
                  className="btn grey lighten-1 black-text"
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.regHandler(e,`/api/reg`)}
                >
                  Регистрация
                </button>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default withUser(AuthPage);
