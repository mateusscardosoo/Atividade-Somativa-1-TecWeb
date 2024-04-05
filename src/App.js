import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };
  }

  handleLogin = (e) => {
    e.preventDefault(); 
    const { email, password } = this.state;
    if (email === 'eduardo.lino@pucpr.br' && password === '123456') {
      this.setState({ message: 'Acessado com sucesso!' });
    } else {
      this.setState({ message: 'Usuário ou senha incorretos!' });
    }
  };

  render() {
    const { email, password, message } = this.state;
    return (
      <div className='App'>
        <form onSubmit={this.handleLogin}>
          <h1>Login</h1>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit">Acessar</button>
          <div className='message'>{message}</div>
        </form>
      </div>
    );
  }
}

export default App;
