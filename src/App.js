import React,{useEffect}from 'react';
import './App.css';


const App = () => {
  const APP_ID = 'f5c945fe';
  const APP_KEY = '272ae8a6053dc1372ceb9d03337cf652';


useEffect(() => {
  getRecipes()
});


const getRecipes = async () => {
  const response = await fetch("https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}")
  const data =  await response.json();
  console.log(data);

}
return(
  <div className="App">
    <form className='search=form'>
      <input className='search-bar' type='text'/>
      <button className='search-button' type='submit'>Search</button>
    </form>

  </div>
);
};
export default App;


