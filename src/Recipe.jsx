import React from 'react';

const Recipe = ({title, image, ingredients, calories}) => {
    return (
        <div>
          <h1>{title}</h1>
          <ul>
            {ingredients.map((el, index) => (
              <li key={index}>{el.text}</li>
            ))}
            
          </ul>
          <p>{calories}</p>
          <img src={image} alt="img" />
        </div>
    );
}

export default Recipe;