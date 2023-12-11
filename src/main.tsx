import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/output.css'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.tsx'
import App from './App.tsx'


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} >
      <Route path="/" element={<Home />} />
    </Route>,
  ])
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
)
