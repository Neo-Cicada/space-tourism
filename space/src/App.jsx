import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Crew from './components/Crew'
import Destination from './components/Destination'
import Technology from './components/Technology'
import NavBar from './components/NavBar'



function App() {

  return(
    <>
    
     

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Destination' element={<Destination />} />
        <Route path='/Crew' element={<Crew />} />
        <Route path='/Technology' element={<Technology />} />
      </Routes>    
    </>
  
  ) 
  }

export default App
