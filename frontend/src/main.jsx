import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Edit from './components/Edit/Edit.jsx'
import Create from './components/Create/Create.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import './components/Button/button.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/edit/:id',
    element: <Edit/>
  },
  {
    path:'/create',
    element: <Create/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
