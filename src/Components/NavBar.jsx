import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon


const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center'>
        {/* <div>
          <img src={logo} className='h-12 md:w-40 w-[150px]' alt='Logo' />
        </div> */}
        <div className='hidden md:flex md:space-x-8 font-sans text-secondary'>
          <div>Home</div>
          <a href="/">Explore Places</a>
          <a href="/">Photo Gallery</a>
          <a href="/allblog">Latest Blogs</a>
          <div>Categories</div>
          <a href="/worldmap">World Map</a>
          <a href="/signup">Signup</a>
        </div>
        <div className='md:hidden'>
        
          <FaBars onClick={toggleNav} className='cursor-pointer' />
        </div>

      </div>

      {/* Responsive Navigation */}
      {isNavOpen && (
        <div className='md:hidden mt-2'>
          <div className='flex flex-col space-y-2'>
            <div>Home</div>
            <a href="/places">Explore Places</a>
            <a href="/photogallery">Photo Gallery</a>
            <div>Latest Blogs</div>
            <a>Categories</a>
            <a href="/signup">Signup</a>
          </div>
        </div>
        
      )}
      
    </div>
  );
};

export default NavBar;