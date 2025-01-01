import React from "react";

const BtnPrimary = ({ children, className, type = "button" }) => {
  return (
    <button className={`border-0 outline-none text-xl text-dark bg-primary font-medium inline-block no-underline py-2 px-4 rounded-md ${className}`} type={type}>
      {children}
    </button>
  );
};

export default BtnPrimary;
