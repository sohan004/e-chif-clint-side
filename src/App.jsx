import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import { Outlet, useNavigation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const navigation = useNavigation()
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Nav></Nav>
      {navigation.state === 'loading' && <div className="d-flex mt-5 text-primary justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>}
      {navigation.state != 'loading' && <Outlet></Outlet>}
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
