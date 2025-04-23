import { useContext, useEffect, useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Navber() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, singOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const profile = user && user?.photoURL;

  const handleLogout = () => {
    singOutUser().then(() => {
      toast.success("Logout Successful", {
        position: "top-right",
        autoClose: 1000,
      });
      navigate("/login");
    });
  };

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const links = (
    <>
      <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link text-red-500" : "nav-link"}>Home</NavLink>
      {user && (
        <>
          <NavLink to="books" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link text-red-500" : "nav-link"}>Books</NavLink>
          <NavLink to="addBook" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link text-red-500" : "nav-link"}>Add Book</NavLink>
          <NavLink to="borrowedBooks" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link text-red-500" : "nav-link"}>Borrowed Books</NavLink>
        </>
      )}
      <NavLink to="about" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link text-red-500" : "nav-link"}>About Us</NavLink>
      <NavLink to="contact" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link text-red-500" : "nav-link"}>Contact Us</NavLink>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-30">
      {/* Top Section */}
      <div className="bg-[#EF2346] text-white py-1 border-b border-white/20 px-2">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <h3 className="text-white/90 text-sm md:text-base font-semibold">
            Welcome to Pathmala
          </h3>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/90 text-xs sm:text-sm md:text-base">
              <FiPhoneCall size={20} className="text-yellow-300" />
              +880 1234 567890
            </span>
            <div className="sm:flex hidden gap-3">
              <a href="#" className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-gray-200 dark:bg-black dark:text-white/90 px-2">
        <div className="navbar max-w-screen-2xl mx-auto py-2">
          <div className="navbar-start">
            <div className="flex items-center gap-2 cursor-pointer">
              <img className="w-10" src="https://cdn-icons-png.freepik.com/256/3920/3920592.png?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid" alt="Logo" />
              <h2 className="text-3xl font-bold">Pathmala</h2>
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
                <img className="cursor-pointer lg:w-10 lg:h-10 w-9 h-9 rounded-full" src={profile} alt="Profile" />
                <div className="text-3xl dark:text-white cursor-pointer" onClick={handleThemeToggle}>
                  {theme === "dark" ? <CiLight /> : <MdDarkMode />}
                </div>
                <button onClick={handleLogout} className="rounded font-medium text-sm sm:text-base text-white/90 md:text-lg py-2 px-2 sm:px-3 bg-red-500">Logout</button>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="text-3xl sm:text-3xl lg:hidden" onClick={handleMenuToggle}>
                    {isMenuOpen ? <HiX /> : <RiMenu3Fill />}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="text-3xl dark:text-white cursor-pointer" onClick={handleThemeToggle}>
                  {theme === "dark" ? <CiLight /> : <MdDarkMode />}
                </div>
                <Link to="/login">
                  <a className="hover:ring-[#EF2346] text-white hover:bg-white bg-[#EF2346] hover:ring-1 py-2 px-4 rounded font-medium cursor-pointer hover:text-[#000000] duration-300">
                    Login
                  </a>
                </Link>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="text-3xl sm:text-3xl lg:hidden" onClick={handleMenuToggle}>
                    {isMenuOpen ? <HiX /> : <RiMenu3Fill />}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Menu */}
      <div className={`fixed top-0 right-0 h-full w-[100%] bg-white shadow-lg p-4 px-2 z-20 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end">
          <button onClick={handleMenuToggle} className="text-2xl"><HiX /></button>
        </div>
        <div>
          <img className="mb-10 mx-auto" src="https://i.ibb.co/Mq5LpJ5/Liceria-1.png" alt="" />
        </div>
        <div className="flex flex-col items-center space-y-6 font-medium text-lg">{links}</div>
        <div className="flex gap-3 justify-center mt-10">
          <a href="#" className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-yellow-300 transition-transform duration-200 hover:scale-110"><FaInstagram size={20} /></a>
        </div>
      </div>
    </div>
  );
}

export default Navber;
