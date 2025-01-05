import React from "react";

const SectionHeading = ({ children, className }) => {
  return <h1 className={`lowercase text-5xl md:text-6xl font-medium text-primary ${className}`}>{children}</h1>;
};

export default SectionHeading;
