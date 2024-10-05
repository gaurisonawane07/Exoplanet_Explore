import React from 'react'
import { useParams } from 'react-router-dom';

function Planetscards( ) {

    const planets = [
        {
          id: 1,
          name: 'K2-33b',
          image: 'https://images-assets.nasa.gov/image/PIA20690/PIA20690~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
          description: 'is one of the youngest exoplanets detected to date using NASA Kepler Space Telescope',
          details: 'Explore K2-33b',
        },
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
      

const { planetName } = useParams();
const planet = planets.find((p) => p.name === planetName);


  return (
    <div className="bg-black h-screen flex justify-center items-center">
        {/* <div className="bg-slate-200 shadow-lg rounded-lg p-6 h-screen "> */}
        <div className="w-1/2">
            <img
                src={planet.image}
                alt={`${planet.name} image`}
                className="h-full w-3/4 object-cover rounded-md mb-4 animate-rotate-once"
            />
        </div>
       
        <div>
            <h2 className="text-5xl font-bold mb-2 text-white">{planet.name}</h2>
            <p className="text-gray-600 mb-2"><strong>Description:</strong> {planet.description} </p>
        </div>
        
        {/* </div> */}
    </div>
  )
}

export default Planetscards
