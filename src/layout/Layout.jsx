import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Home/Header'
import Footer from './Home/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <div>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout