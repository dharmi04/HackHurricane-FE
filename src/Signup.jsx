import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/signup', signupData);
      console.log('Signup Successful:', response.data);
      navigate('/home');
      // Handle successful signup (e.g., redirect, update user state)
    } catch (error) {
      console.error('Signup Error:', error.response.data.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="max-w-md p-4 bg-secondary rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                name="email"
                value={signupData.email}
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
                id="password"
                name="password"
                value={signupData.password}
                onChange={handleChange}
                className="block w-full p-2 border rounded mt-1"
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 rounded hover:bg-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
