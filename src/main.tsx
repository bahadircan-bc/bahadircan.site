import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/output.css'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.tsx'
import App from './App.tsx'
import Blog from './pages/Blog.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} errorElement={<NotFound/>}>
      <Route path="/" element={<Home />} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>,
  ])
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
