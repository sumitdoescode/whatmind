import React, { Children } from "react";

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`bg-dark pb-24 lg:pb-48 ${className} relative`}>
      {children}
    </section>
  );
};

export default Section;
