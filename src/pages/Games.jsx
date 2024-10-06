import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'; 


function Games() {
  return (
    <section className="relative bg-black bg-opacity-70 text-white bg-[url('https://science.nasa.gov/wp-content/uploads/2023/09/427020main-pia12832-c.jpg?w=1536&format=webp')] bg-cover bg-center">
    <Navbar/>
      <div className="container h-screen text-center bg-transparent flex flex-col justify-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Explore our Games</h2>
        <div className="flex justify-around items-center h-full">
            <div
              key={1}
              className="p-6 bg-black bg-opacity-60 border border-red-400 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl w-2/5 h-1/2"
            >
              <div className="text-3xl font-normal mb-4">Exoplanet Quiz</div>
              <h3 className="text-xl font-semibold mb-2">Embark on an interstellar adventure with the Exoplanet Quiz Challenge! This engaging quiz game is designed for space enthusiasts and curious minds alike, offering a fun way to test and expand your knowledge about exoplanets—those fascinating worlds beyond our solar system</h3>
              <Link to="/quiz">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        Play Now
                    </button>
                </Link>
            </div>
            <div
              key={2}
              className="p-6 bg-black bg-opacity-60 border border-red-400 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl w-2/5 h-1/2"
            >
              <div className="text-3xl font-normal mb-4">Exoplanet Drag and Drop Game</div>
              <h3 className="text-xl font-semibold mb-2">an interactive and educational game that invites players to explore the fascinating world of exoplanets in a fun and engaging way! Perfect for all ages, this game combines critical thinking with creative gameplay, allowing players to enhance their knowledge about exoplanets while honing their sorting and categorization skills</h3>
              <Link to="/explore">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        Play Now
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Games
