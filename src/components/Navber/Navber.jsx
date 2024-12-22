import { useContext } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";

function Navber() {
  const navigate = useNavigate()
  const { user, singOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    singOutUser()
      .then(() => {
        toast.success("Logout Successfull", {
          position: "top-right",
          autoClose: 1000,
        });
      })
      navigate('/login')
  };

  const links = (
    <div className="space-x-8">
      <NavLink
        to={`/`}
        className={({ isActive }) =>
          isActive
            ? "mx-2 py-2 font-medium underline underline-offset-8 rounded text-lg text-[#0075FF]"
            : "mx-2 py-2 font-medium hover:underline-offset-8 rounded text-lg"
        }
      >
        Home
      </NavLink>
      {
        user && 
        <>
                <NavLink
        to={`books`}
        className={({ isActive }) =>
          isActive
            ? "mx-2 py-2 font-medium underline underline-offset-8 rounded text-lg text-[#0075FF]"
            : "mx-2 py-2 font-medium hover:underline-offset-8 rounded text-lg"
        }
      >
        Books
      </NavLink>
      <NavLink
        to={`addBook`}
        className={({ isActive }) =>
          isActive
            ? "mx-2 py-2 font-medium underline underline-offset-8 rounded text-lg text-[#0075FF]"
            : "mx-2 py-2 font-medium hover:underline-offset-8 rounded text-lg"
        }
      >
        Add Book
      </NavLink>
      <NavLink
        to={`borrowedBooks`}
        className={({ isActive }) =>
          isActive
            ? "mx-2 py-2 font-medium underline underline-offset-8 rounded text-lg text-[#0075FF]"
            : "mx-2 py-2 font-medium hover:underline-offset-8 rounded text-lg"
        }
      >
        Borrowed Books
      </NavLink>
        </>
      }

    </div>
  );

  return (
    <div className="bg-gray-100">
      <div className="navbar max-w-7xl mx-auto  py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="text-2xl sm:text-3xl lg:hidden">
            <HiMenuAlt1 />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center cursor-pointer">
          <img
            className="w-10"
            src="https://img.icons8.com/?size=80&id=IKHKcMvxrS5E&format=png"
            alt=""
          />
          <a className="text-2xl font-bold">PATHMALA</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
         <div className="flex gap-2 items-center">
           <img  className=" cursor-pointer lg:w-10 lg:h-10 w-9 h-9 rounded-full" src={user?.photoURL} alt="" />
          <button
            onClick={handleLogout}
            className="rounded font-medium text-white/80 md:text-lg py-2 px-3 bg-red-500"
          >
            Logout
          </button>
         </div>
        ) : (
          <Link to={`/login`}>
            <a className="hover:ring-[#0075FF] text-white hover:bg-white bg-[#0075FF] hover:ring-1 py-2 px-4 rounded font-medium cursor-pointer hover:text-[#0075FF] duration-300">
              Login
            </a>
          </Link>
        )}
      </div>
    </div>
    </div>
  );
}

export default Navber;
