import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex">
      <Sidebar
        isCollapsed={isCollapsed}
        isVisible={isSidebarVisible}
        toggleMobileSidebar={toggleMobileSidebar}
      />

      <div className="flex-1">
        <Navbar
          toggleSidebar={toggleSidebar}
          isCollapsed={isCollapsed}
          toggleMobileSidebar={toggleMobileSidebar}
        />
        <div className="p-4">Main Content</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
