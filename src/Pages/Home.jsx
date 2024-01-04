import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import image1 from '../assets/home-1.jpg';
import ProductCard from '../Components/ProductCard';

const API_URL = import.meta.env.VITE_API_URL_SELLER;

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        setAllProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-primary">
      <NavBar />
      <div className='flex md:flex-row p-6 bg-primary text-white'>
        <div className="md:w-1/2 md:mr-10">
          <h1 className='text-5xl font-serif p-4'>Let's find your comfort</h1>
          <p className='text-xl p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi urna, rhoncus eu tortor id, faucibus feugiat augue. Mauris sit.</p>
          <button className='p-4 border-2 border-white rounded-full hover:bg-secondary'>Get Started</button>
        </div>
        <div className='md:w-1/2 justify-end md:ml-16'>
          <img src={image1} className='w-[600px] h-[400px]' alt="Home" />
        </div>
      </div>

      <div className="p-4">
        <h2 className='text-center font-mono text-4xl '>All Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-white">
          {allProducts.map((product) => (
            <div key={product._id} className="bg-accent rounded-lg shadow-md p-4 text-white mb-4">
              <ProductCard
                id={product._id}
                PropertyType={product.PropertyType}
                Location={product.Location}
                Area={product.Area}
                Price={product.Price}
                Description={product.Description}
                PhoneNumber={product.PhoneNumber}
                Email={product.Email}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
