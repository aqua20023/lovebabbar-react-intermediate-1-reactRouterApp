import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Support from './components/Support'
import NotFound from './components/NotFound'
import About from './components/About'
import Labs from './components/Labs'
import { NavLink } from 'react-router-dom'
import MainHeader from './components/MainHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/support">Support</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/labs">Labs</NavLink>
      </li>
      </ul>
    </nav>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/labs' element={<Labs/>}/>
          <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
