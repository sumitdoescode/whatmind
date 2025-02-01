import React from "react";

const SectionHeading = ({ children, className = "" }) => {
    return <h1 className={`lowercase  text-5xl md:text-6xl font-medium text-primary ${className}`}>{children}</h1>;
};
// mb-10 lg:mb-16
export default SectionHeading;
