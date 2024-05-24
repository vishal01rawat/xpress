import React, { useState } from 'react';
import { Spinner } from './Spinner';

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
  className?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick, className = "", isLoading = false, type = 'button' }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    onClick(); // Call the onClick function immediately
    setLoading(false); // Toggle loading state after onClick is executed
  };

  return (
    <button
      type={type}
      className={`flex justify-center border border-transparent shadow-md bg-blue-400 focus:outline-none rounded-md transition-transform duration-150 transform hover:scale-105 active:scale-95 
      ${className}`}
      onClick={handleClick}
      disabled={loading || isLoading} // Disable button when loading
    >
      {/* Conditionally render Spinner if loading or isLoading is true, otherwise render buttonText */}
      {(loading || isLoading) ? <Spinner /> : buttonText}
    </button>
  );
};

export default Button;
