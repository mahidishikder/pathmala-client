import { Outlet, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Menu, Bell, MessageCircle, User, X, Home, Book, Info, Phone } from 'lucide-react';
import { AuthContext } from '../provider/AuthPorvider';

function Dashboard() {
  const { user } = useContext(AuthContext);  // Fetch the user from context
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSidebarOpen(false); // Mobile sidebar close after clicking any link
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 p-4 space-y-4 z-50 absolute md:static md:block h-screen transition-all duration-300 ${
          isSidebarOpen ? 'left-0' : '-left-64'
        } md:left-0 top-0`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-4 md:block">
          <h2 className="text-xl font-bold">PATHMALA</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Menu Links */}
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard/home"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2 p-2 rounded-md bg-gray-700"
                  : "hover:text-red-500 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
              }
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2 p-2 rounded-md bg-gray-700"
                  : "hover:text-red-500 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
              }
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>

        <div className="divider">Or</div>

        {/* Sidebar Menu Links (New section - Home, Books, etc.) */}
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2 p-2 rounded-md bg-gray-700"
                  : "hover:text-red-500 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
              }
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/books"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2 p-2 rounded-md bg-gray-700"
                      : "hover:text-red-500 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
                  }
                >
                  <Book className="w-5 h-5" />
                  <span>Books</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addBook"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2 p-2 rounded-md bg-gray-700"
                      : "hover:text-red-500 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
                  }
                >
                  <Book className="w-5 h-5" />
                  <span>Add Book</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/borrowedBooks"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2 p-2 rounded-md bg-gray-700"
                      : "hover:text-red-500 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
                  }
                >
                  <Book className="w-5 h-5" />
                  <span>Borrowed Books</span>
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2 p-2 rounded-md bg-gray-700"
                  : "hover:text-red-500 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
              }
            >
              <Info className="w-5 h-5" />
              <span>About Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2 p-2 rounded-md bg-gray-700"
                  : "hover:text-red-500 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
              }
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="bg-[#F56E83] text-white p-4 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-4">
            {/* Mobile Sidebar Toggle */}
            <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="w-6 h-6" />
            </button>

            {/* Profile and Logo */}
            <img
              src={user?.photoURL || "https://via.placeholder.com/40"}
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
          </div>

          {/* Icons */}
          <div className="flex space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 cursor-pointer" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <div className="relative">
              <MessageCircle className="w-6 h-6 cursor-pointer" />
              <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
            </div>
            <div className="relative">
              <User className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Outlet for rendering nested routes */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
