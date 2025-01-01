import React from "react";

const Content = ({ children, className }) => {
  return <p className={`text-lg text-white ${className}`}>{children}</p>;
};

export default Content;
