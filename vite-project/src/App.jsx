import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/Dashboard' element={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
