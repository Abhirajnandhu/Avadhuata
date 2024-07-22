import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';
import "../styles/Register.css";
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser({ username, password });
      alert('Registration successful');
      navigate('/login'); 
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register');
    }
  };

  return (
    <div className='div1'>
      <h1>Register</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type='button' className='btn' onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;







