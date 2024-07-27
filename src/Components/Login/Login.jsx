import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import back from './back.png'

const Login = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    const errors = { name: '', email: '', password: '' };

    if (!name) {
      errors.name = 'Name cannot be empty.';
      valid = false;
    }
    if (!email) {
      errors.email = 'Email cannot be empty.';
      valid = false;
    }
    if (!password) {
      errors.password = 'Password cannot be empty.';
      valid = false;
    }

    setErrors(errors);

    
    if (valid) {
      if (name === 'irena' && email === 'irena@vovk' && password === 'irena') {
        alert('Success!');
        navigate('/dashboard'); 
      } else {
        alert('Invalid name, email or password.');
      }
    }
  };

  return (
    <div className='login-wrapper'>
      
      <div className='login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name}</p>}
          </div>
          <div className='input-box'>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && <p style={{ color: 'red', fontSize: '12px'}}>{errors.email}</p>}
          </div>
          <div className='input-box'>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
