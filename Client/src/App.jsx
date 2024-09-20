import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import News from './Components/News';
import Home from './Components/Home';
import Glossary from './Components/Glossary';
import About from './Components/About';
import Coininfo from './Components/Coininfo';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
<Route path='/News' element={<News/>}/>
<Route path='/Glossary' element={<Glossary/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Coininfo' element={<Coininfo/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
