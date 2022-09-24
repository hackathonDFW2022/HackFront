import LandingPage from './pages/LandingPage'
import {Route,Routes} from 'react-router-dom'
import GreenForm from './pages/GreenForm'
import Navbar from './components/Navbar'


function App() {
  

  return (

     <main className='min-h-screen max-h-fit bg-slate-50'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/form' element={<GreenForm />} />
          <Route path='/dashboard' />
        </Routes>

    </main>
  )
}

export default App
