import React, { Children } from "react";

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`bg-dark pb-48 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
