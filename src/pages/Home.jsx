import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

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
];

const features = [
  {
    id: 1,
    title: 'Interactive Learning Modules',
    description: 'Deep dive into exoplanet science through interactive lessons that engage students and enhance understanding.',
    icon: '📚',
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
    AOS.init({ duration: 1200 }); // Initialize AOS and set animation duration
  }, []);

  return (
    <div className="relative w-full h-auto min-h-screen overflow-hidden">
      <video
        className="fixed top-0 left-0 w-full h-screen object-cover"
        src={ExoplanetsVideo}
        autoPlay
        loop
        muted
      />

      <Navbar />

      <main className="relative z-10 w-full h-auto min-h-screen bg-transparent flex flex-col items-center">
        <div className="relative z-10 w-full h-auto min-h-screen bg-black bg-opacity-70 flex flex-col items-center">
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
        <section className="relative h-auto flex flex-col items-center bg-black bg-opacity-70 text-white py-10">
          <h1
            className="text-5xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            What Are Exoplanets?
          </h1>
          <div
            className="w-full px-10 p-5 text-xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p>
              Exoplanets, or extrasolar planets, are planets located outside our solar system. They orbit stars other than the Sun and can vary widely in size, composition, and distance from their host stars.
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-center items-center gap-5 mt-10">
            <div
              className="h-auto w-80 p-5 border border-red-400 rounded-2xl bg-black bg-opacity-60"
              data-aos="fade-up"
            >
              <h3 className="font-bold text-4xl">Discovery</h3>
              <p className="text-xl">
                The first confirmed exoplanet was discovered in 1992, orbiting a pulsar. Since then, thousands of exoplanets have been discovered using various methods.
              </p>
            </div>

            <div
              className="h-auto w-80 p-5 border border-red-400 rounded-2xl bg-black bg-opacity-60"
              data-aos="fade-up"
            >
              <h3 className="font-bold text-4xl">Habitability</h3>
              <p className="text-xl">
                Scientists are particularly interested in finding Earth-like exoplanets in the "habitable zone" of their stars, where conditions might be right for liquid water and potentially life.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16 bg-black bg-opacity-70 text-white">
          <div className="container mx-auto text-center">
            <h2
              className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
              data-aos="fade-up"
            >
              What You'll Discover
            </h2>
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
      </main>

      <Footer />
    </div>
  );
};

export default Home;
