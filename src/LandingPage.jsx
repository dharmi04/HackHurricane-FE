import React from 'react';
import realEstateImage from './assets/realestate1.jpg'; // Import the image

const LandingPage = () => {
    return (
        <div className='bg-primary h-screen text-white'>
            <div className='flex md:flex-row flex-col p-6'>
                <div className="md:w-1/2 md:mr-10 flex flex-col justify-center"> {/* Adjusted to flex-column */}
                    <h1 className='text-5xl font-serif p-4 text-center'>WELCOME TO Dwellify</h1> {/* Centered text */}
                    <div className='flex justify-center'> {/* Centering the button */}
                        <button className='p-4 border-2 border-white rounded-full hover:bg-secondary'>Explore</button>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-end items-center'>
                    <div className='w-full max-w-xl rounded-lg overflow-hidden shadow-lg'> {/* Added styling for attractiveness */}
                        <img
                            src={realEstateImage}
                            alt="Real Estate"
                            className='w-full h-auto transform hover:scale-105 transition duration-300'
                        /> {/* Adjusted image styling */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
