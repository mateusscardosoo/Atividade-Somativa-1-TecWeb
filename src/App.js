import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (email === 'eduardo.lino@pucpr.br' && password === '123456') {
      setMessage('Acessado com sucesso!');
    } else {
      setMessage('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className='App'>

    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Acessar</button>
      <div className='message'>{message}</div>
    </form>
          </div>
  );
}

export default App;
