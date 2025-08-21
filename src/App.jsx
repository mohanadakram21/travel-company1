import React from 'react'
import './App.css'
import Layout from './component/Layout/Layout'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home'
import Contact from './component/contact/Contact'
import BookingForm from './component/Booknow/BookingForm'
const routers = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index:true , element: <Home/>},
      {path: 'home', element:  <Home /> },
      {path: 'contact', element:  <Contact /> },
      {path: 'book', element:  <BookingForm /> }

    ]
  }
])
 


export default function App() {
return <>

  <RouterProvider router={routers} />
  </>

}