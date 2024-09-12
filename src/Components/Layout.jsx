import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"

function Layout() {
  return (
    <>
    <Navbar />
      <Header />
       <Outlet />
   

    </>
  )
}

export default Layout