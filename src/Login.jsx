import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', loginData);
      console.log('Login Successful:', response.data);
      navigate('/home');
      // Handle successful login (e.g., redirect, update user state)
    } catch (error) {
      console.error('Login Error:', error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="block w-full p-2 border rounded mt-1"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="block w-full p-2 border rounded mt-1"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded hover:bg-primary"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
