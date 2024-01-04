import React from 'react'
import NavBar from '../Components/NavBar'
import image1 from '../assets/home-1.jpg'

const Home = () => {
    return (
        <div className='bg-primary'>
            <div>
                <NavBar />
            </div>
            <div className='flex md:flex-row flex-col p-6 text-white' >
                <div className="md:w-1/2 md:mr-10">
                    <h1 className='text-5xl font-serif p-4'>Let's find your comfort</h1>
                    <p className='text-xl p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi urna, rhoncus eu tortor id, faucibus feugiat augue. Mauris sit.
                    </p>
                    <button className='p-4 border-2 border-white rounded-full hover:bg-secondary'>Get Started</button>
                </div>
                <div className='md:w-1/2 justify-end md:ml-16'>
                    <img src={image1} className='w-[400px] h-[400px]' />
                </div>

            </div>

        </div>
    )
}

export default Home
