import React from 'react';

function Planet1() {
  return (
    <div className="flex items-center justify-center h-7 bg-black p-9">
      
      <img
        src="https://images-assets.nasa.gov/image/PIA20690/PIA20690~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint"
        alt="Planet"
        className="w-96 h-96 shadow-lg"
      />

      {/* Planet Information */}
      <div className="ml-12 text-white max-w-lg">
        <h1 className="text-4xl font-bold mb-4">K2-33b</h1>
        <p className="text-gray-300 text-lg mb-6">
        K2-33b, shown in this illustration, is one of the youngest
        exoplanets detected to date using NASA Kepler Space Telescope. 
        It makes a complete orbit around its star in about five days. 
        These two characteristics combined provide exciting new directions 
        for planet-formation theories. K2-33b could have formed on a farther 
        out orbit and quickly migrated inward.
        </p>

      
      </div>
    </div>
  );
}

export default Planet1;
