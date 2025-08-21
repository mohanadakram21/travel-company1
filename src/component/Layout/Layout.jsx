import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'



export default function Layout() {
  return <>
   <Nav/>
   <Outlet>

   </Outlet>
   <Footer/>
  </>
   
}