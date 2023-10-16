import React, { useState, useEffect } from 'react';
import Sidebarcompo from './Sidebarcompo';

const SidebarMain = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 960);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 960);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Sidebarcompo isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Rest of your app */}
    </div>
  );
};

export default SidebarMain;
