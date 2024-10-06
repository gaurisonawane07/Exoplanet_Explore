import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Quiz from '../components/Quiz'
import ExoplanetGame from '../components/ExoplanetGame'

function DragNdrop() {
  return (
    <div className="bg-gray-900">
      <Navbar/>
        <ExoplanetGame/>
      <Footer/>
    </div>
  )
}

export default DragNdrop
