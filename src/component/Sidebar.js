import React from "react";
import assetIcon from "../assets/icons/asset.svg";
import notificationIcon from "../assets/icons/notification.svg";
import premiumIcon from "../assets/icons/premium.svg";
import settingIcon from "../assets/icons/setting.svg";
import tradeIcon from "../assets/icons/trade.svg";
import homeIcon from "../assets/icons/home.svg";
import greaterIcon from "../assets/icons/greater.svg";

const sidebarItems = [
  { id: 1, label: "Home", icon: homeIcon },
  { id: 2, label: "My assets", icon: assetIcon },
  { id: 3, label: "Notification", icon: notificationIcon },
  { id: 4, label: "Trade", icon: tradeIcon },
  { id: 5, label: "Premium", icon: premiumIcon },
  { id: 6, label: "Settings", icon: settingIcon },
];

const Sidebar = ({ isCollapsed, isVisible, toggleMobileSidebar }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0  h-[100vh] bg-white shadow-lg transition-all duration-300 md:static ${
          isCollapsed ? "w-20" : "w-64"
        } ${isVisible ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <nav className="flex-1 pl-4 pr-4 pt-16">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="group flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-3xl relative"
                >
                  <img
                    src={item.icon}
                    alt={`${item.label} Icon`}
                    className="h-6 w-6 text-black"
                  />
                  <span
                    className={`text-black ${isCollapsed ? "hidden" : "block"}`}
                  >
                    {item.label}
                  </span>
                  {!isCollapsed && (
                    <img
                      src={greaterIcon}
                      alt="Greater Icon"
                      className="absolute right-4 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
