import React from "react";

const BtnPrimary = ({ children, className = "", type = "button", onClick, ariaLabel, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`border-0 outline-none text-lg sm:text-xl lg:text-2xl text-dark bg-primary font-medium inline-block no-underline py-1 px-2 sm:py-2 sm:px-4 rounded-md ${className}`}
            type={type}
            // important for accessibility
            aria-label={ariaLabel}
            disabled={disabled} // added for disabled state
        >
            {children}
        </button>
    );
};

export default BtnPrimary;
