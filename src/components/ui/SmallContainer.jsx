import React from "react";

const SmallContainer = ({ children, className = "" }) => {
  return <div className={`max-w-[950px] mx-auto w-[95%] ${className}`}>{children}</div>;
};

export default SmallContainer;
