import { useState } from 'react'
import './App.css'

import Hero from './components/Hero/Hero'
import Courses from './components/Courses/Courses'
import Contact from './components/Contact/Contact'
import Cards from './components/Cards/Cards'
import Profile from './components/Profile/Profile'
import Blog from './components/Blogs/Blog'



function App() {
 

  return (
    <>
   
     <Hero/>
     <Courses/>
     <Cards/>
     <Profile/>

     <Blog/>
     <Contact/>
    </>
  )
}

export default App
