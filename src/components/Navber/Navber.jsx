import { BsBook } from "react-icons/bs"
import { HiMenuAlt1 } from "react-icons/hi"
import { NavLink } from "react-router-dom";
import'./Navber.css'


function Navber() {
  const links =
  <NavLink 
  to={`/`}
  className={({ isActive }) => 
    isActive
      ? "mx-2 py-2 font-medium underline underline-offset-8 rounded text-lg text-[#FF6060]" 
      : "mx-2 py-2 font-medium hover:underline-offset-8 rounded text-lg"
  }
>
  Home
</NavLink>

  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="text-2xl sm:text-3xl lg:hidden">
      <HiMenuAlt1 />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className="flex gap-2 items-center ">
    <span className="text-2xl text-[#FF6060]"><BsBook /></span>
    <a className=" text-2xl font-bold">PATHMALA</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="ring-[#FF6060] ring-1 py-2 px-4 rounded text-gray-700 font-medium cursor-pointer hover:text-[#FF6060] duration-300">login</a>
  </div>
</div>
  )
}

export default Navber