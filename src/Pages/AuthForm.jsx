// src/components/AuthForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ onAuthentication }) => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/signup', formData);
      console.log('Signup Successful:', response.data);
      // Assuming onAuthentication is a callback to handle successful authentication
      onAuthentication(response.data);
    } catch (error) {
      console.error('Signup Error:', error.response.data.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);
      console.log('Login Successful:', response.data);
      // Assuming onAuthentication is a callback to handle successful authentication
      onAuthentication(response.data);
    } catch (error) {
      console.error('Login Error:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      <form>
        <label>
          Email:
          <input
            type="text"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </label>
        <br />

        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
};

export default AuthForm;
