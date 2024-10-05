import React from 'react'

function planet2({src , info}) {
  return (
    <div className="flex items-center justify-center h-screen bg-black p-9">
      
    <img
      src={src}
      alt="Planet"
      className="w-96 h-96 shadow-lg"
    />

    {/* Planet Information */}
    <div className="ml-12 text-white max-w-lg">
      <h1 className="text-4xl font-bold mb-4">K2-33b</h1>
      <p className="text-gray-300 text-lg mb-6">
        {info}
      </p>

    
    </div>
  </div>
  )
}

export default planet2