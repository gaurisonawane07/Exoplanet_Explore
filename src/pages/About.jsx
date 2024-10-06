import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
    <div
      className="min-h-screen flex flex-col items-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('https://science.nasa.gov/wp-content/uploads/2023/07/hubble-ugc12295-potw2330a.jpg?w=1536&format=webp')" }} 
    >
        <Navbar/>
        <div className="h-screen  flex justify-center items-center ">
            <div className="bg-black bg-opacity-80 shadow-lg rounded-lg p-6 max-w-2xl text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-4">
                About Us
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                Welcome to our platform! We are dedicated to bringing the wonders of space closer to you.
                Explore, learn, and discover new frontiers.
                </p>

                <p className="text-lg text-gray-300 mb-6">
                For more information on space exploration, research, and missions,
                feel free to visit the official NASA website by clicking the link below.
                </p>

                <a
                href="https://www.nasa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                Visit NASA's Website
                </a>
            </div>
        </div>
      
    </div>
    </>
  );
};

export default About;
