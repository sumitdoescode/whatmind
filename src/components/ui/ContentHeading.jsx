import React from "react";

const ContentHeading = ({ children, className }) => {
  return <h2 className={`text-3xl text-white font-medium ${className}`}>{children}</h2>;
};

export default ContentHeading;
