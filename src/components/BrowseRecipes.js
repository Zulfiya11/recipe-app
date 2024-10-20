import React, { useState } from 'react';

const BrowseRecipes = ({ recipes }) => {
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='browse-recipes'>
      <h2>Browse Recipes</h2>
      <input 
        type="text" 
        placeholder="Search recipes..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />

      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Directions:</strong> {recipe.directions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseRecipes;
