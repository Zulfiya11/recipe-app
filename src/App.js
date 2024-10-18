import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SubmitRecipe from './components/SubmitRecipe';
import BrowseRecipes from './components/BrowseRecipes';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitRecipe addRecipe={addRecipe} />} />
          <Route path="/browse" element={<BrowseRecipes recipes={recipes} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
