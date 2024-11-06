 
import React, { useState } from "react";

// Sample data for exoplanets
const exoplanets = [
    // { name: "Proxima Centauri b", characteristic: "Closest exoplanet to the Solar System" },
    { name: "Kepler-186f", characteristic: "First Earth-sized planet in the habitable zone" },
    { name: "TRAPPIST-1 d", characteristic: "One of three Earth-sized planets in the TRAPPIST-1 system" },
    { name: "HD 209458 b", characteristic: "First exoplanet discovered transiting a star" },
    { name: "WASP-12b", characteristic: "Known for extreme atmospheric conditions" },
    { name: "GJ 667Cc", characteristic: "Located in the habitable zone of its star" },
    { name: "LHS 1140 b", characteristic: "Super-Earth with potential for atmospheric studies" },
  ];
  

  const characteristics = [
    //   "Closest exoplanet to the Solar System",
      "Known for extreme atmospheric conditions",
      "One of three Earth-sized planets in the TRAPPIST-1 system",
      "Located in the habitable zone of its star",
      "First exoplanet discovered transiting a star",
      "Super-Earth with potential for atmospheric studies",
      "First Earth-sized planet in the habitable zone",
    
  ];
  

const ExoplanetGame = () => {
  const [draggedPlanet, setDraggedPlanet] = useState(null);
  const [message, setMessage] = useState("");

  const handleDragStart = (planet) => {
    setDraggedPlanet(planet);
  };

  const handleDrop = (characteristic) => {
    if (draggedPlanet && draggedPlanet.characteristic === characteristic) {
      setMessage(`Correct! ${draggedPlanet.name} matches "${characteristic}".`);
    } else {
      setMessage("Try Again!");
    }
    setDraggedPlanet(null); // Reset the dragged planet
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-5xl font-bold my-6">Exoplanet Drag and Drop Game</h1>
      <div className="flex space-x-10">
        {/* Exoplanets List */}
        <div className="space-y-4">
          <h2 className="text-3xl">Exoplanets</h2>
          {exoplanets.map((planet) => (
            <div
              key={planet.name}
              draggable
              onDragStart={() => handleDragStart(planet)}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer"
            >
              {planet.name}
            </div>
          ))}
        </div>

        {/* Characteristics List */}
        <div className="space-y-4">
          <h2 className="text-3xl">Drop Here</h2>
          {characteristics.map((char) => (
            <div
              key={char}
              onDrop={() => handleDrop(char)}
              onDragOver={(e) => e.preventDefault()}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300"
            >
              {char}
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mt-4 text-lg">{message}</div>
    </div>
  );
};

export default ExoplanetGame;
