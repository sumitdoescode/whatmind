import React from "react";

const BtnPrimary = ({ children, className, type = "button" }) => {
  return (
    <button
      onClick={() => {}}
      className={`border-0 outline-none text-lg sm:text-xl lg:text-2xl text-dark bg-primary font-medium inline-block no-underline py-1 px-2 sm:py-2 sm:px-4 rounded-md ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
