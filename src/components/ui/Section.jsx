import React from "react";

const Section = ({ id = "", children, className = "", paddingLevel = "high" }) => {
    // Set conditional padding based on whether it's the last section
    const paddingBottom = paddingLevel === "low" ? "pb-16" : "pb-24 lg:pb-48";
    // const paddingBottom = "p-0";

    return (
        <section id={id} className={`bg-dark relative ${paddingBottom} ${className}`}>
            {children}
        </section>
    );
};

export default Section;
