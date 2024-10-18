import React, { useState } from 'react';

const SubmitRecipe = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, ingredients, directions });
    setName('');
    setIngredients('');
    setDirections('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit a New Recipe</h2>
      <label>Recipe Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Ingredients:</label>
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />

      <label>Directions:</label>
      <textarea value={directions} onChange={(e) => setDirections(e.target.value)} required />

      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default SubmitRecipe;
