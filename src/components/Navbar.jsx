import React from 'react'
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <div className="relative bg-black bg-opacity-70 w-full h-full flex justify-center items-center ">
      <header className="relative bg-slate-800 bg-opacity-50 p-6 w-3/4 my-2 rounded-2xl">
        <nav className="container mx-auto flex justify-between items-center bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          <div className="text-3xl font-bold">
          <Link to="/">
                Exoplanet Explorer
          </Link>
          </div>
          <div>
            <ul className="flex space-x-6">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/explore">
                        Explore
                    </Link>
                </li>
                <li>
                    <Link to="/Games">
                        Games
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
          </div>
        </nav>
      </header>
</div> 
  )
}

export default Navbar
