

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col flex-1">
    <Header />
    <div className="flex h-screen">
      <Sidebar />
     
      <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-0 flex-1 bg-gray-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
