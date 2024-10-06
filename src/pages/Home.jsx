import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles

import ExoplanetsVideo from '../assets/Exoplanets.mp4';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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
    content: '',
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
  
  
];


const features = [
  {
    id: 1,
    title: 'Interactive Learning Modules',
    description: 'Deep dive into exoplanet science through interactive lessons that engage students and enhance understanding.',
    icon: '📚', // You can replace with icons from a library like FontAwesome or Material Icons
  },
  {
    id: 2,
    title: 'Explore Exoplanets',
    description: 'Search and explore real exoplanets using the latest data from NASA and other space agencies.',
    icon: '🌌',
  },
  {
    id: 3,
    title: 'Games & Quizzes',
    description: 'Test your knowledge with fun games and quizzes that make learning about exoplanets exciting.',
    icon: '🎮',
  },
  {
    id: 4,
    title: 'Community Resources',
    description: 'Access free resources, join discussions, and learn with others in a supportive community.',
    icon: '🤝',
  },
];


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1200 });  // Initialize AOS and set animation duration
  }, []);

  return (
    <div className="relative w-full h-auto min-h-screen bg-black overflow-hidden">
      <video 
        className="fixed top-0 left-0 w-full h-screen object-cover" 
        src={ExoplanetsVideo} 
        autoPlay 
        loop 
        muted 
      />

      <Navbar/>

      <div className="relative z-10 w-full h-auto min-h-screen bg-black bg-opacity-70 flex flex-col items-center justify-start ">
        <div className="text-center text-white">
          <h1 
            className="text-6xl flex items-center justify-center h-screen font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Exoplanet Explorer
          </h1>
        </div>
      </div>

      {/* Exoplanets Section */}
      <div className="relative h-screen flex flex-col items-center bg-black bg-opacity-70 text-white">
        <div 
          className="flex justify-center items-center text-5xl font-bold my-10 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          <h1>What Are Exoplanets?</h1>
        </div>
        <div className="min-h-full flex flex-col">
          <div 
            className="w-full px-10 p-5 my-5 text-xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p>
              Exoplanets, or extrasolar planets, are planets located outside our solar system. They orbit stars other than the Sun and can vary widely in size, composition, and distance from their host stars. Here are some key points about exoplanets:
            </p>
          </div>
          <div className="w-full flex justify-center items-center p-2">
 
          <div className="h-full w-full flex flex-col items-center border border-red-400 rounded-2xl m-1 bg-black bg-opacity-60 pop-animation"
          data-aos="fade-up"
          >
           <h3 className="p-10 font-bold text-4xl">Discovery</h3>
           <div className="p-10 font-normal text-xl">
             The first confirmed exoplanet was discovered in 1992, orbiting a pulsar (a type of neutron star). However, the first exoplanet found orbiting a Sun-like star was detected in 1995. 
             Since then, thousands of exoplanets have been discovered using various methods, including the transit method, radial velocity method, and direct imaging.
     </div>
  </div>

 
  <div 
    className="h-full w-full flex flex-col items-center border border-red-400 rounded-2xl m-1 bg-black bg-opacity-60 pop-animation" 
    data-aos="fade-up"
  >
    <h3 className="p-10 font-bold text-4xl">Habitability</h3>
    <div className="p-10 font-normal text-xl">
      Scientists are particularly interested in finding Earth-like exoplanets in the "habitable zone" of their stars, where conditions might be right for liquid water and potentially life.
      The study of exoplanets helps us understand the possibility of life beyond Earth and the formation and evolution of planetary systems.
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Planets Section */}
      <div className="relative bg-black bg-opacity-70 h-screen flex flex-col items-center">
        <div className="flex justify-center items-center w-full h-1/4">
          <h1 className="font-bold text-5xl bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
              data-aos="fade-up">Some Planets which are not considered as Exoplanets</h1>
        </div>
        <div className="h-full w-full">
          <div className="min-h-6 mt-50 flex justify-center items-center overflow-x-auto space-x-4 py-4 snap-x snap-mandatory text-white">
            {planets.map((planet) => (
              <Link 
                key={planet.id} 
                to={`/planet/${planet.name}`} 
                className="card transition-transform duration-300 transform hover:scale-105 bg-black rounded-3xl shadow-lg p-3 flex flex-col items-center w-64 snap-start border border-red-400"
                data-aos="fade-up"
              >
                <img src={planet.image} alt={planet.name} className="w-full h-40 object-cover rounded-t-lg" />
                <h2 className="text-lg font-semibold mt-2">{planet.name}</h2>
                <p className="text-sm">{planet.description}</p>
                <p className="text-xl bold mt-2">{planet.details}</p>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center w-full h-1/4">
            <h1 className="text-white font-bold text-5xl" data-aos="fade-up">And many more .......</h1>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative py-16 bg-black bg-opacity-70 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
              data-aos="fade-up">What You'll Discover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="p-6 bg-black bg-opacity-60 border border-red-400 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                data-aos="zoom-in"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;