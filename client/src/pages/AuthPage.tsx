/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

interface MyProps {
  login: any;
}
interface MyState {
  email: string;
  password: string;
}
export default class AuthPage extends React.Component<MyProps, MyState> {
  baseUrl = 'http://localhost:5000';

  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  regHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    url: string
  ) => {
    e.preventDefault();
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: this.state.email,
        password: this.state.password,
      }),
    });
    const data: any = await res.json();
    console.log(data);
    return data;
  };

  loginHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    url: string
  ) => {
    try {
      e.preventDefault();
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: this.state.email,
          password: this.state.password,
        }),
      });
      const data = await res.json();
      console.log(data);
      console.log(this.props.login);
      this.props.login(data.token, data.userId);
      return data;
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  render() {
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      this.setState({ email: e.target.value })
                    }
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="validate"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <label htmlFor="password">Пароль</label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button
                type="submit"
                className="btn deep-purple accent-1"
                style={{ marginRight: 10 }}
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  this.loginHandler(e, `${this.baseUrl}/api/auth/login`)
                }
              >
                Войти
              </button>
              <button
                type="submit"
                className="btn grey lighten-1 black-text"
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  this.regHandler(e, `${this.baseUrl}/api/auth/reg`)
                }
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
