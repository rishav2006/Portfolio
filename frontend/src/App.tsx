import React from 'react'
import Home from './content-page/Home'
import { Route, Routes } from 'react-router-dom'
import About from './content-page/About'
import Projects from './content-page/Projects'
import Authentication from './content-page/Authentication'
import Dashboard from './content-page/Dashboard'

const App = () => {
  return (
    <div className='bg-zinc-950 min-h-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/login' element={<Authentication/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
