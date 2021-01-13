import React from 'react';




export default class AuthPage extends React.Component{
    state = {
        email:'',
        password:''
    }
    baseUrl = 'http://localhost:5000'

    clickHandler = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,url:string) => {
        console.log(this.state.email);
        console.log(this.state.password);
        e.preventDefault();
        const res = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: this.state.email,password: this.state.password})
        });
        const data = await res.json();
        console.log(data);
        return data;
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
                      className="yellow-input"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({email:e.target.value})}
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
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.clickHandler(e,`${this.baseUrl}/api/auth/login`)}
                >
                  Войти
                </button>
                <button
                  className="btn grey lighten-1 black-text"
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.clickHandler(e,`${this.baseUrl}/api/auth/reg`)}
                >
                  Регистрация
                </button>
              </div>
            </div>
          </div>
        </div>
      )
        
    }
}