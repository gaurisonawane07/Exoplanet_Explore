import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Explore() {
  const [selectedYear, setSelectedYear] = useState(''); // State to track the selected year

  const exoplanets = [
    {
      pl_name: "HD 108236 e",
      hostname: "HD 108236",
      disc_year: 2020,
      pl_orbper: 19.59015781,
      pl_radj: 0.268
    },
    {
      pl_name: "HD 108236 c",
      hostname: "HD 108236",
      disc_year: 2020,
      pl_orbper: 6.20362189,
      pl_radj: 0.183
    },
    {
      pl_name: "TOI-1224 b",
      hostname: "TOI-1224",
      disc_year: 2024,
      pl_orbper: 4.1782656,
      pl_radj: 0.188
    },
    {
      pl_name: "TOI-1224 c",
      hostname: "TOI-1224",
      disc_year: 2024,
      pl_orbper: 17.94536449,
      pl_radj: 0.302
    },
    {
      pl_name: "TOI-5704 b",
      hostname: "TOI-5704",
      disc_year: 2023,
      pl_orbper: 3.771116,
      pl_radj: 0.288
    },
    {
      pl_name: "HD 23472 d",
      hostname: "HD 23472",
      disc_year: 2022,
      pl_orbper: 3.97664,
      pl_radj: 0.067
    },
    {
      pl_name: "WASP-80 b",
      hostname: "WASP-80",
      disc_year: 2012,
      pl_orbper: 3.0678504,
      pl_radj: 0.952
    },
    {
      pl_name: "HD 207897 b",
      hostname: "HD 207897",
      disc_year: 2021,
      pl_orbper: 16.202159,
      pl_radj: 0.223
    },
    {
      pl_name: "TOI-1288 b",
      hostname: "TOI-1288",
      disc_year: 2022,
      pl_orbper: 2.699835,
      pl_radj: 0.467
    },
    {
      pl_name: "HAT-P-2 b",
      hostname: "HAT-P-2",
      disc_year: 2007,
      pl_orbper: 5.63341,
      pl_radj: 0.951
    },
    {
      pl_name: "TOI-5238 b",
      hostname: "TOI-5238",
      disc_year: 2022,
      pl_orbper: 4.872171,
      pl_radj: 0.466
    },
    {
      pl_name: "TOI-1408 b",
      hostname: "TOI-1408",
      disc_year: 2023,
      pl_orbper: 4.424712,
      pl_radj: 0.719
    },
    {
      pl_name: "TOI-4860 b",
      hostname: "TOI-4860",
      disc_year: 2023,
      pl_orbper: 1.52275959,
      pl_radj: 0.756
    },
    {
      pl_name: "TOI-3785 b",
      hostname: "TOI-3785",
      disc_year: 2023,
      pl_orbper: 4.6747218,
      pl_radj: 0.422
    },
    {
      pl_name: "TOI-3071 b",
      hostname: "TOI-3071",
      disc_year: 2024,
      pl_orbper: 1.266938,
      pl_radj: 0.639
    },
    {
      pl_name: "TOI-1691 b",
      hostname: "TOI-1691",
      disc_year: 2024,
      pl_orbper: 16.7369,
      pl_radj: 0.318
    },
    {
      pl_name: "TOI-3071 b",
      hostname: "TOI-3071",
      disc_year: 2024,
      pl_orbper: 1.2669382,
      pl_radj: 0.637
    }
  ];

  // Filter exoplanets based on selected year
  const filteredExoplanets = selectedYear
    ? exoplanets.filter((planet) => planet.disc_year.toString() === selectedYear)
    : exoplanets;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex justify-center items-center flex-col text-center py-20 bg-black">
        <h1 className="text-5xl font-bold mb-4">Explore the Universe of Exoplanets</h1>
        <p className="text-lg">Discover distant worlds, their characteristics, and what makes them unique.</p>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto py-10">
      <h2 className="text-4xl font-semibold text-center mb-10">Discovered Exoplanets</h2>   
        <div className="bg-slate-900 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Filter by Discovery Year</h2>
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <select
              className="p-3 rounded-lg bg-gray-700 text-white"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">All Years</option>
              {[...new Set(exoplanets.map((planet) => planet.disc_year))].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </form>
        </div>
      </section>

      {/* Exoplanet Cards Grid */}
      <section className="container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredExoplanets.map((planet, index) => (
            <div key={`${planet.pl_name}-${planet.hostname}-${index}`} className="bg-slate-900 bg-opacity-90 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{planet.pl_name}</h3>
              <p className="text-gray-400 mb-4">Host Name: {planet.hostname}</p>
              <p className="text-gray-400 mb-4">Discovery Year: {planet.disc_year}</p>
              <p className="text-gray-400 mb-4">Orbital Period: {planet.pl_orbper} days</p>
              <p className="text-gray-400 mb-4">Planet Radius: {planet.pl_radj} Jupiter radii</p>
              {/* <button className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                Learn More
              </button> */}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Explore;
