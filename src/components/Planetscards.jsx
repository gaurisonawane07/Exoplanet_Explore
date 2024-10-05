import React from 'react'
import { useParams } from 'react-router-dom';

function Planetscards( ) {

    const planets = [
        {
          id: 2,
          name: 'Venus',
          image: 'https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?w=1536&format=webp',
          description: "Venus is the second planet from the Sun, and Earth's closest planetary neighbor.",
          content:"Venus is the second planet from the Sun, and Earth's closest planeta neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets.Venus is similar in structure and size to Earth, and is sometimes called Earth's evil twin. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Below the dense, persistent clouds, the surface has volcanoes and deformed mountains.",
          details: 'Explore Venus',
        },
        {
          id: 3,
          name: 'Earth',
          image: 'https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?w=1536&format=webp',
          description: 'Earth our home planet is the third planet from the Sun, and the fifth largest planet.',
          content:"Earth has a very hospitable temperature and mix of chemicals that have made life abundant here. Most notably, Earth is unique in that most of our planet is covered in liquid water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago.Some of the features of our planet that make it great for sustaining life are changing due to the ongoing effects of climate change.",
          details: 'Explore Earth ',
        },
        {
          id: 4,
          name: 'Mars',
          image: 'https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?w=1536&format=webp',
          content: 'Mars – the fourth planet from the Sun – is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather.',
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
          content:"Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.From the jets of water that spray from Saturn's moon Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries",
          details: 'Explore Saturn',
        },
        {
          id: 7,
          name: 'Uranus',
          image: 'https://science.nasa.gov/wp-content/uploads/2024/03/uranus-pia18182-16x9-1.jpg?w=1536&format=webp',
          description: 'The seventh planet from the Sun, Uranus has the third largest diameter of planets in our solar system.',
          content: "Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.Uranus was the first planet found with the aid of a telescope. It was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.",
          details: 'Explore Uranus',
        },
        
      ];
      

const { planetName } = useParams();
const planet = planets.find((p) => p.name === planetName);


  return (
    <div className="bg-black h-screen flex justify-center items-center">
        {/* <div className="bg-slate-200 shadow-lg rounded-lg p-6 h-screen "> */}
        <div className="w-1/2  ">
            <img
                src={planet.image}
                alt={`${planet.name} image`}
                className="h-full w-3/4 object-cover rounded-md mb-4 animate-rotate-once"
            />
        </div>
       
        <div className='w-1/2   h-full flex justify-center items-center flex-col'>
            <h2 className="text-5xl font-bold mb-2 text-white">{planet.name}</h2>
            <p className="  text-gray-400 text-xl mb-2 px-10"><strong>Description:</strong> {planet.content} </p>
        </div>
        
        {/* </div> */}
    </div>
  )
}

export default Planetscards
