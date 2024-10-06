// App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Planet1 from './components/Planet1';
import Planetscards from './components/Planetscards';
import Explore from './pages/Explore';
// import Explore1 from './pages/Explore';
import About from './pages/About';
// import Quiz from './components/Quiz';
import QuizPage from './pages/QuizPage';
import ExoplanetGame from './components/ExoplanetGame';
import DragNdrop from './pages/DragNdrop';
import Games from './pages/Games';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planet/1" element={<Planet1/>} />
      <Route path="/planet/:planetName" element={<Planetscards/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/quiz" element={<QuizPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/games" element={<Games/>}/>
      <Route path="/Drag&Drop" element={<DragNdrop/>}/>
      <Route path="/planet/" element={<Planetscards name={"Venus"} description={"Venus is the second planet from the Sun, and Earth's closest planetary neighbor."} image={'https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?w=1536&format=webp'} />}/>
    </Routes>
  );
};

export default App;


