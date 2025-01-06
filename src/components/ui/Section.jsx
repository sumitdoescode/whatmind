import React from "react";

const Section = ({ id, children, className = "", isLast }) => {
  // Set conditional padding based on whether it's the last section
  const paddingBottom = isLast === "true" ? "pb-8 lg:pb-16" : "pb-24 lg:pb-48";

  return (
    <section id={id} className={`bg-dark relative ${paddingBottom} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
