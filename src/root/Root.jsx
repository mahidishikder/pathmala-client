import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navber from "../components/Navber/Navber"

function Root() {
  return (
    <div>

      <div className="">
        <Navber></Navber>
      </div>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root