import React from "react";
const PrimaryButton = ({ text, className, onClick, disabled }) => {
  return (
    <button
      className={`rounded-none border-none text-base font-bold text-white-50 bg-orange-50  h-12 cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
