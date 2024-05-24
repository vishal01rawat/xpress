import React from "react";
import { urlPath } from "../utils/Url";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col w-48 bg-gray-500 text-white h-screen">
      <div className="flex items-center justify-center h-10 bg-gray-500">
        <h1 className="text-sm font-bold"></h1>
      </div>

      <NavLink
        to="/upload"
        className="flex items-center p-3 hover:bg-gray-700 cursor-pointer transition-all duration-300 "
      >
        <img
          src={`${urlPath.icon}upload.png`}
          className="w-5 h-5 cursor-pointer object-cover"
          alt="Dashboard Icon"
        />
        <span className="text-sm ">Upload</span>
      </NavLink>
    
      <NavLink
        to="/watch"
        className="flex items-center p-3 hover:bg-gray-700 cursor-pointer transition-all duration-300 "
      >
        <img
          src={`${urlPath.icon}watch.png`}
          className="w-5 h-5 cursor-pointer object-cover"
          alt="Bookings Icon"
        />
        <span className="text-sm ml-0">Watch</span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
