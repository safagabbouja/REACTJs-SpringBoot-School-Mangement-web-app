import React, { useState } from 'react';
import Sidebar from '../../Sidebar';
import Header from '../../Header';
// import MainContent from './MainContent'; // Assuming this holds your main content

import Newsboard from './Newsboard';
const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Newsboard /> {/* Render your main content here */}
        
        
      </div>
    </div>
  );
};

export default AppLayout;
