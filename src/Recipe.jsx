import React from 'react';

const Recipe = ({title, image, ingredients, calories}) => {
    return (
        <div className='recipe'>
          <h1 className='recipe__title'>{title}</h1>
          <ul className='recipe__list'>
            {ingredients.map((el, index) => (
              <li className='recipe__item' key={index}>{el.text}</li>
            ))}
            
          </ul>
          <p className='recipe__cal'>Calories:{calories}</p>
          <img src={image} alt="img" />
        </div>
    );
}

export default Recipe;