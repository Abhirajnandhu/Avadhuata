import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await loginUser({ username, password });
      localStorage.setItem('token', data.token);  
      alert('Login successful');
      navigate('/add-expense');  
    } catch (error) {
      console.error('Error logging in user:', error);
      alert('Failed to login');
    }
  };

  return (
    <div className='div2'>
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="button" className='btn1' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;






