import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/custom/Navbar'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Demo from './pages/Demo'


function App() {

  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/demo' element={<Demo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
