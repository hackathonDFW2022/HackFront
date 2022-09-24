import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import LineChart from './components/LineChart'
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <div>
        <h3 className='text-3xl'>test</h3>
        <LineChart />
      </div>
    </div>
  )
}

export default App
