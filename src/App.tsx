import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Characters from './Pages/Characters/Characters'
import About from './Pages/About/About'
import NotFound from './Pages/NotFound/NotFound'
import NavBar from './Components/NavBar/NavBar'
import { NavLink, Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <NavBar/>
    <Routes>
      <Route path = "/" element = { <Home/> } />
      <Route path = "/about" element = { <About/> } />
      <Route path = "/characters" element = { <Characters/> } />
      <Route path ="*" element = { <NotFound/> }></Route>
      {/* <Route path = "/characters/:id" element = { <Character/> } /> */}
    </Routes>
    </div>
    

  )
}

export default App
