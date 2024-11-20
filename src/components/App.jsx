import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Recipes from '../pages/Recipes/Recipes'

export default function App() {
  return (<div className='mainDiv'>  
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/recipes' element={<Recipes/>} />
    </Routes>
    </div>
  )
}


