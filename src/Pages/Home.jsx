// Home.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import image1 from '../assets/home-1.jpg';
import ProductCard from '../Components/ProductCard';
import PropertyDetails from '../Pages/PropertyDetails';

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
        <div>
          <NavBar />
        </div>
        <div className='flex md:flex-row flex-col p-6 text-white' >
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
          <div className="flex overflow-x-auto whitespace-nowrap w-full gap-4">
            {allProducts.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                PropertyType={product.PropertyType}
                Location={product.Location}
                Area={product.Area}
                Price={product.Price}
                Description={product.Description}
                PhoneNumber={product.PhoneNumber}
                Email={product.Email}
              />
            ))}
          </div>
        </div>

{/*         
          <Route path="/property/:id">
            <PropertyDetails />
          </Route> */}
       
      </div>
    
  );
};

export default Home;
