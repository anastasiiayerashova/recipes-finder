import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Recipes from '../pages/Recipes/Recipes'
import NotFound from '../pages/NotFound/NotFound'
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails'
import RecipesSection from '../pages/RecipeDetails/RecipesSection'

export default function App() {
  return (<div className='mainDiv'>  
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/recipes' element={<Recipes />} />

      <Route path='/recipes/:recipeId' element={<RecipeDetails />}>
        <Route path=':detailType' element={<RecipesSection />} />
      </Route>

      <Route path='*' element={<NotFound/>} />
    </Routes>
    </div>
  )
}


