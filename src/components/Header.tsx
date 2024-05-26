import React from 'react'
import { urlPath } from "../utils/Url.ts";
import Button from './Button';
import { NavLink } from 'react-router-dom';

function Header() {

  const handleButtonClick = () => {
    // Add your button click logic here
    console.log('Button clicked');
  };

  return (
    <nav className="flex  justify-between p-2 bg-customBlack  text-black">
    <div className="flex items-center ml-10 mr-5">
      <img   src={`${urlPath.icon}logo.png`} alt="Logo" className="h-8 " />
      
    </div>
    <div className="flex items-center">
<img
src={`${urlPath.icon}profile.png`}
alt="Profile Image"
className="w-8 h-8 object-cover mr-2" // Adjust width and height as needed
title="Choose Logo"
/>
<div className='mr-1 '>
<NavLink to="/login">  <Button buttonText="Login" onClick={handleButtonClick} className="hover:bg-blue-700 text-white font-bold px-2    ml-2 " /> </NavLink>
</div>
</div>

  </nav>
  )
}

export default Header