import { useContext, useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function Navber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal
  const navigate = useNavigate();
  const { user, singOutUser } = useContext(AuthContext);
  const profile = user && user?.photoURL;

  const handleLogout = () => {
    singOutUser()
      .then(() => {
        toast.success("Logout Successful", {
          position: "top-right",
          autoClose: 1000,
        });
      });
    navigate("/login");
  };

  const handleMenuToggle = () => setIsModalOpen(!isModalOpen); // Toggle modal state

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link text-red-500" : "nav-link"
        }
        onClick={handleMenuToggle} // Close the modal when a menu item is clicked
      >
        Home
      </NavLink>
      {user && (
        <>
          <NavLink
            to="books"
            className={({ isActive }) =>
              isActive ? "nav-link text-red-500" : "nav-link"
            }
            onClick={handleMenuToggle}
          >
            Books
          </NavLink>
          <NavLink
            to="addBook"
            className={({ isActive }) =>
              isActive ? "nav-link text-red-500" : "nav-link"
            }
            onClick={handleMenuToggle}
          >
            Add Book
          </NavLink>
          <NavLink
            to="borrowedBooks"
            className={({ isActive }) =>
              isActive ? "nav-link text-red-500" : "nav-link"
            }
            onClick={handleMenuToggle}
          >
            Borrowed Books
          </NavLink>
        </>
      )}
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? "nav-link text-red-500" : "nav-link"
        }
        onClick={handleMenuToggle}
      >
        About Us
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? "nav-link text-red-500" : "nav-link"
        }
        onClick={handleMenuToggle}
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <div>
      {/* Top Section */}
      <div className="bg-[#EF2346] text-white py-2 border-b border-white/20">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
          <h3 className="text-white/90 text-sm md:text-base font-semibold">
            Welcome to Pathmala.com!
          </h3>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <FiPhoneCall size={20} className="text-yellow-300" />
              +880 1234 567890
            </span>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-gray-200">
        <div className="navbar max-w-screen-2xl mx-auto py-4">
          <div className="navbar-start">
            <div className="flex items-center cursor-pointer">
              <img src="https://i.ibb.co/7L39PBQ/Liceria.png" alt="Logo" />
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-10 font-medium text-lg">
              {links}
            </ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="flex gap-2 items-center">
                <img
                  className="cursor-pointer lg:w-10 lg:h-10 w-9 h-9 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <button
                  onClick={handleLogout}
                  className="rounded font-medium text-white/80 md:text-lg py-2 px-3 bg-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login">
                  <a className="hover:ring-[#EF2346] text-white hover:bg-white bg-[#EF2346] hover:ring-1 py-2 px-4 rounded font-medium cursor-pointer hover:text-[#000000] duration-300">
                    Login
                  </a>
                </Link>
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="text-3xl sm:text-3xl lg:hidden"
                    onClick={handleMenuToggle}
                  >
                    {isMenuOpen ? <HiX /> : <HiMenuAlt1 />}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] bg-white shadow-lg p-4 z-20 transform transition-all duration-300 ease-in-out ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={handleMenuToggle} className="text-2xl">
            <HiX />
          </button>
        </div>
        <div>
          <img
            className="mb-10 mx-auto"
            src="https://i.ibb.co.com/Mq5LpJ5/Liceria-1.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center space-y-6 font-medium text-lg">
          {links}
        </div>
        <div className="flex gap-3 justify-center mt-10">
          <a
            href="#"
            className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navber;
