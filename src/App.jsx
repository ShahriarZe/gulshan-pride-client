import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"

function App() {

  const location = useLocation()
  const noFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
  return (
    <>
       <NavBar></NavBar>
      <Outlet></Outlet>
      {noFooter || <Footer></Footer>}
    </>
  )
}

export default App
