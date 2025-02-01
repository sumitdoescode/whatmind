import React from "react";

const Content = ({ children, className = "" }) => {
    return <p className={`text-lg sm:text-xl lg:text-xl text-white ${className}`}>{children}</p>;
};
// mt-2
export default Content;
