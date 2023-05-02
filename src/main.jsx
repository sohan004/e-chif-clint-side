import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ErorPage from './components/Erorpage/ErorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-server.vercel.app/chef')
      }
    ]
  },
  {
    path: '*',
    element: <ErorPage></ErorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



/****
 * 1
 * 2
 * 3
 * 4x
 * 5x
 * 6x
 * 
 * 
 * ****/ 