import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Nav></Nav>
    </div>
  )
}

export default App
