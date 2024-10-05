// App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Planet1 from './components/Home/Planet1';
import Planet2 from './components/Home/planet2';
import Planet3 from './components/Home/Planet3';
import Planet4 from './components/Home/Planet4';
import Planet5 from './components/Home/Planet5';
import Planet6 from './components/Home/Planet6';
import Planet7 from './components/Home/Planet7';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planet/1" element={<Planet1/>} />
      <Route path="/planet/2" element={<Planet2 />} /> 
      <Route path="/planet/3" element={<Planet3 />} />
      <Route path="/planet/4" element={<Planet4 />} />
      <Route path="/planet/5" element={<Planet5 />} />
      <Route path="/planet/6" element={<Planet6 />} />
      <Route path="/planet/7" element={<Planet7 />} />
    </Routes>
  );
};

export default App;


