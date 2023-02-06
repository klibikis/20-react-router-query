import './App.css'
import Home from './Pages/Home/Home'
import Characters from './Pages/Characters/Characters'
import About from './Pages/About/About'
import NotFound from './Pages/NotFound/NotFound'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CharacterPage from './Pages/CharacterPage/CharacterPage'

function App() {
  const {id} = useParams();

  return (
    <div className='container'>
    <NavBar/>
    <Routes>
      <Route path = "/" element = { <Home/> } />
      <Route path = "/about" element = { <About/> } />
      <Route path = "/characters" element = { <Characters/> } />
      <Route path = "/characters/:id" element = { <CharacterPage/> }/>
      <Route path ="*" element = { <NotFound/> }></Route>
    </Routes>
    </div>
  )
}

export default App
