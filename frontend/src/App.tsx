import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'

const App = () => {
  return (
    <div className='bg-zinc-950 min-h-screen'>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
    </div>
  )
}

export default App
