import React from "react";
import searchIcon from "../assets/icons/search.svg";
import notificationIcon from "../assets/icons/notification.svg";
import user from "../assets/images/user.png";

const Navbar = ({ toggleSidebar, isCollapsed, toggleMobileSidebar }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button
            className="p-2 rounded-lg hover:bg-gray-400 md:hidden"
            onClick={toggleMobileSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          
          {/* For large screens, toggle the sidebar directly */}
          <button
            className="p-2 rounded-lg hover:bg-gray-400 hidden md:block"
            onClick={toggleSidebar} // This will directly toggle the sidebar on large screens
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <img src={searchIcon} alt="Search" className="h-6 w-6 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <img src={notificationIcon} alt="Notifications" className="h-8 w-8 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <img src={user} alt="User" className="h-10 w-10 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;