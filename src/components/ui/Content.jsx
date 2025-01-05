import React from "react";

const Content = ({ children, className }) => {
  return <p className={`text-xl md:text-2xl mt-2 text-white ${className}`}>{children}</p>;
};

export default Content;
