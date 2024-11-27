import React from "react";

const InputText = ({ label, placeholder, onChange, value, name }) => {
  return (
    <div>
      <div className="text-sm font-thin pb-1">{label}</div>
      <input
        type="text"
        className="h-12 rounded-none w-full border-none text-base focus:outline-none"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {}
    </div>
  );
};
export default InputText;
