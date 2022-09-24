import { useState } from 'react'
import reactLogo from './assets/react.svg'

import LandingPage from './pages/LandingPage'
import {Route,Routes} from 'react-router-dom'

function App() {
  

  return (
     <main className='min-h-screen max-h-fit bg-green-900'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </main>
  )
}

export default App
