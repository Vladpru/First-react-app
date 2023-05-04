import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const AppId = '65cfb1c8';
  const AppKey = '10ed4b01e6bb89c5dbf379e787f681e2';
  
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('pie')
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    getResipes()
  }, [query])
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`

  const getResipes = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <h1 className='title'>Seacrh the recipe</h1>
      <form className='form'  onSubmit={getSearch}>
        <input className='form__input' type='text' value={search} onChange={updateSearch}/>
        <button className='form__button' type='submit' onSubmit={getSearch}>Seacrh</button>
      </form>
      <div className='recipes'>
        {recipes.map(el => (
          <Recipe
            key={Math.random()}
            title={el.recipe.label}
            image={el.recipe.image}
            ingredients={el.recipe.ingredients}
            calories={Math.floor(el.recipe.calories)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
