import React from 'react'
import Home from './content-page/Home'
import Project from './content-page/Project-Desc'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './content-page/About'

const App = () => {
  return (
    <div className='bg-zinc-950 min-h-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
