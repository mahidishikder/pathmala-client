import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navber from "../components/Navber/Navber"

function Root() {
  return (
    <div className="dark:bg-black bg-gray-100">

      <div className="">
        <Navber></Navber>
      </div>
      <div className="">
      <Outlet></Outlet>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root