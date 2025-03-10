import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const user = auth.currentUser;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Popular", path: "/movies/popular" },
    { name: "Top Rated", path: "/movies/top_rated" },
    { name: "Upcoming", path: "/movies/upcoming" },
  ];

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`movie/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <header>
      {/* login & logout */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        {user ? (
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="CiniBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Cinibite
              </span>
            </NavLink>

            <div className="flex md:order-2">
              <form onSubmit={handleSearch}>
                <div className="relative md:block">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>

              <div className="mx-4">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
            <div
              className="items-center justify-between block text-center w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink to={item.path} className={getNavLinkClass}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center py-3 gap-2">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="CiniBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Cinibite
              </span>
            </div>
            <h2 className="text-white text-2xl font-bold text-center">
              Login Page
            </h2>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
