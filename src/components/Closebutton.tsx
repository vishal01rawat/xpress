
// CloseButton.js
import React from 'react';

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" text-black absolute top-0 right-0 m-4 text-md rounded-sm text:black hover:text-white hover:bg-red-500 px-1 py-0 ease-in-out transition-transform duration-150 transform hover:scale-105 active:scale-95"
    >
      X
    </button>
  );
}

export default CloseButton;
