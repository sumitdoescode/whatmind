import React, { useState } from "react";

const Input = ({ type = "text", placeholder = "", name, required = false, value, onChange, ariaLabel, className = "", ...rest }) => {
  const [input, setInput] = useState(""); // for controlled inputs
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      aria-label={ariaLabel}
      className={`
border-0 outline-none py-2 px-4 text-lg sm:text-xl lg:text-2xl text-white bg-[#1f1f1f] rounded-md inline-block flex-1 placeholder:text-white w-auto ${className}`}
      required={required}
      {...rest}
    />
  );
};

export default Input;
