import React from "react";
import { urlPath } from "../utils/Url";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col w-48 bg-customBlackFade text-white h-screen">
      {/* <div className="flex items-center justify-center h-10 bg-gray-100">
        <h1 className="text-sm font-bold"></h1>
      </div> */}

      <NavLink
        to="/upload"
        className="flex items-center p-3 mt-5 hover:bg-gray-700  cursor-pointer transition-all duration-300 rounded-lg"
      >
        <img
          src={`${urlPath.icon}upload.png`}
          className="w-5 h-5 cursor-pointer object-cover"
          alt="Upload Icon"
        />
        <span className="text-sm text-white font-medium hover:underline ml-3">Upload</span>
      </NavLink>
    
      <NavLink
        to="/watch"
        className="flex items-center p-3 mt-3 hover:bg-gray-700 cursor-pointer transition-all duration-300 rounded-lg"
      >
        <img
          src={`${urlPath.icon}watch.png`}
          className="w-5 h-5 cursor-pointer object-cover"
          alt="Watch Icon"
        />
        <span className="text-sm text-white font-medium hover:underline ml-3">Watch</span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
