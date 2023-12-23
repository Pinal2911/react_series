import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//outlet lets to do like
//header same footer same only main content will change
//syntax:
//<header/>
//<outlet/>
//<footer/>
function Layout() {
  return (
   
   <>
   <Header></Header>
   <Outlet></Outlet>
   <Footer></Footer>
   </>
  )
}

export default Layout
