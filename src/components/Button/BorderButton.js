import React from "react";

const BorderButton = ({ text, className, onClick }) => {
  return (
    <button
      className={`border border-solid border-white-50 text-base bg-grey-400 font-bold text-white-50 h-12 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BorderButton;
