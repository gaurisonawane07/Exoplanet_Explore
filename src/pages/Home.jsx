import React from 'react';
import { Link } from 'react-router-dom'; 
import ExoplanetsVideo from '../assets/Exoplanets.mp4'; 

const planets = [
  {
    id: 2,
    name: 'Venus',
    image: 'https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?w=1536&format=webp',
    description: "Venus is the second planet from the Sun, and Earth's closest planetary neighbor.",
    details: 'Explore Venus',
  },
  {
    id: 3,
    name: 'Earth',
    image: 'https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?w=1536&format=webp',
    description: 'Earth our home planet is the third planet from the Sun, and the fifth largest planet.',
    details: 'Explore Earth ',
  },
  {
    id: 4,
    name: 'Mars',
    image: 'https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?w=1536&format=webp',
    description: 'Mars the fourth planet from the Sun is a dusty, cold, desert world with a very thin atmosphere.',
    details: 'Explore Mars',
  },
  {
    id: 5,
    name: 'Jupiter',
    image: 'https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg?w=1536&format=webp',
    description: 'Jupiter is the largest planet in our solar system if it were a hollow shell, 1,000 Earths could fit inside.',
    content:"Jupiter is a world of extremes. It's the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.6 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis.",
    details: 'Explore Jupiter',
  },
  {
    id: 6,
    name: 'Saturn',
    image: 'https://science.nasa.gov/wp-content/uploads/2023/05/saturn-farewell-pia21345-sse-banner-1920x640-1.jpg?w=1536&format=webp',
    description: 'Saturn is the sixth planet from the Sun, the second-largest planet in our solar system.',
    details: 'Explore Saturn',
  },
  {
    id: 7,
    name: 'Uranus',
    image: 'https://science.nasa.gov/wp-content/uploads/2024/03/uranus-pia18182-16x9-1.jpg?w=1536&format=webp',
    description: 'The seventh planet from the Sun, Uranus has the third largest diameter of planets in our solar system.',
    details: 'Explore Uranus',
  },
  
];

const Home = () => {
  return (
    <div className="relative w-full h-auto min-h-screen bg-black overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-screen object-cover" 
        src={ExoplanetsVideo} 
        autoPlay 
        loop 
        muted 
      />
      <nav className='bg-gray-800 p-6'>
      </nav>

      <div className="relative z-10 w-full h-auto min-h-screen bg-black bg-opacity-50 flex flex-col items-center justify-start ">
        
        <div className="text-center text-white">
          <h1 className="text-6xl flex items-center justify-center h-screen font-bold ">Universe Unveiled</h1>
        </div>
      </div>

{/* Planets which are not considered as Exoplanets */}
<div className="h-screen flex flex-col items-center">
      <div className="flex justify-center items-center   w-full h-1/4">
            <h1 className="text-white font-bold text-5xl">Planets which are not considered as Exoplanets</h1>
      </div>
      <div className="h-full w-full ">
      <div className=" min-h-6 mt-50 flex overflow-x-auto space-x-4 py-4 snap-x snap-mandatory text-white">
          {planets.map((planet) => (
            <Link 
              key={planet.id} 
              to={`/planet/${planet.name}`} 
              className="card transition-transform duration-300 transform hover:scale-105 bg-black rounded-3xl shadow-lg p-3 flex flex-col items-center w-64 snap-start border "
            >
            
              <img src={planet.image} alt={planet.name} className="w-full h-40 object-cover rounded-t-lg" />
              <h2 className="text-lg font-semibold mt-2  ">{planet.name}</h2>
              <p className="text-sm  ">{planet.description}</p>
              <p className="text-xl bold   mt-2">{planet.details}</p>
            </Link>
          ))}
      </div>
      <div className="flex justify-center items-center   w-full h-1/4">
      <h1 className="text-white font-bold text-5xl">And many more .......</h1>

      </div>

      </div>
</div>
     

      <div className="w-full bg-gray-500 py-12 px-6 text-center">
    
        <div className="w-full mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Explore More</h2>
          <p className="text-lg text-black-700 mt-4">Learn fascinating facts and details about our solar system.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Planetary Facts</h3>
              <p className="mt-4 text-black-600">Delve into detailed facts about each planet's atmosphere, surface, and potential for life.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Space Missions</h3>
              <p className="mt-4 text-black-600">Discover the exciting missions that have explored our solar system and beyond.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Astronomy Resources</h3>
              <p className="mt-4 text-black-600">Access resources and tools to learn more about astronomy and planetary science.</p>
            </div>
          </div>
        </div>

        <div className="w-full mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Latest Discoveries</h2>
          <p className="text-lg text-gray-700 mt-4">Stay updated with the newest findings from space research and exploration.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Exoplanet Discovery</h3>
              <p className="mt-4 text-gray-600">Scientists have recently discovered a new exoplanet in the habitable zone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Mars Water Evidence</h3>
              <p className="mt-4 text-gray-600">New evidence suggests the presence of ancient water flows on Mars.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Moon Exploration</h3>
              <p className="mt-4 text-gray-600">Recent missions have found new mineral deposits on the lunar surface.</p>
            </div>
          </div>
        </div>
        
        <div className="w-full">
          <h2 className="text-4xl font-bold text-gray-900">Get Involved</h2>
          <p className="text-lg text-gray-700 mt-4">Join the journey of space exploration. Participate in citizen science projects and contribute to research.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Citizen Science</h3>
              <p className="mt-4 text-gray-600">Contribute to real scientific research from the comfort of your home.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Astronomy Clubs</h3>
              <p className="mt-4 text-gray-600">Join local astronomy clubs to meet fellow enthusiasts and experts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Educational Workshops</h3>
              <p className="mt-4 text-gray-600">Attend workshops and seminars to learn more about space science.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;