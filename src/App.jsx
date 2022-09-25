import LandingPage from './pages/LandingPage'
import {Route,Routes} from 'react-router-dom'
import GreenForm from './pages/GreenForm'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';

function App() {
  

  return (

     <main className='min-h-screen max-h-fit bg-slate-50 '>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/form' element={<GreenForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/results' element={<Results />}/>
        </Routes>

    </main>
  )
}

export default App
