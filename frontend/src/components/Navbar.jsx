import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa"; // Avatar icon
import logo from "../images/decibel.logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.reload(); // Refresh to reflect changes
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-2 sm:w-11/12 md:10/12 lg:w-9/12 mx-auto">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-2 mx-3">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Center Section - Navigation (Visible on Large Screens) */}
        <div className="max-[1150px]:hidden block space-x-6 text-gray-700">
          <a href="/services" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Leadership</a>
          <a href="#" className="hover:text-blue-600">Engage</a>
          <a href="#" className="hover:text-blue-600">Partners</a>
          <a href="#" className="hover:text-blue-600">Resources</a>
          <a href="#" className="hover:text-blue-600">About</a>
        </div>

        {/* Right Section - User Avatar/Login Buttons */}
        <div className="flex flex-row items-center space-x-4 relative">
          {user ? (
            <div className="relative">
             <div className="flex flex-row justify-end items-center gap-3"><div className="text-blue-600 text-md font-bold">Hi, {user.username}</div>
              {/* User Avatar (Click to open dropdown) */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none"
              >
                <FaUserCircle size={32} className="text-blue-600 hover:text-blue-700" />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 top-7 mt-6  bg-white shadow-md rounded-lg py-2 z-50 overflow-hidden w-auto">
                  <div className="px-4 py-2 border-b">
                    <p className="text-gray-700 font-semibold">{user.username}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                 
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div></div>
          ) : (
            <>
              <a href="/login">
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-100">
                  Login
                </button>
              </a>
              <a href="/signup">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold">
                  Sign Up →
                </button>
              </a>
            </>
          )}

          {/* Hamburger Menu - Visible on Small Screens */}
          <button
            className="hidden max-[1150px]:block text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Dropdown Menu (Visible Only When isOpen is true) */}
      {isOpen && (
        <div className="block max-[1150px]:block bg-white shadow-lg absolute right-10 top-25 mx-6 my-1 p-3 w-[400px] shadow-blue-300 rounded-b-sm">
          <nav className="flex flex-col space-y-4 py-4 text-center">
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="hover:text-blue-600">Leadership</a>
            <a href="#" className="hover:text-blue-600">Engage</a>
            <a href="#" className="hover:text-blue-600">Partners</a>
            <a href="#" className="hover:text-blue-600">Resources</a>
            <a href="#" className="hover:text-blue-600">About</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;










  