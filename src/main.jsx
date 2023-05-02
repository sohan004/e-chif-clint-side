import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ErorPage from './components/Erorpage/ErorPage.jsx'
import Details from './components/Details/Details.jsx'
import Log from './components/Account/Log.jsx'
import Signup from './components/Account/Signup.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-server.vercel.app/chef')
      },
      {
        path: '/log_in',
        element: <Log></Log>
      },
      {
        path: '/Sign_up',
        element: <Signup></Signup>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-server.vercel.app/chef/${params.id}`)
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
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