import React from "react";

const SocialBtn = ({ iconSrc = "", iconAlt = "icon", text = "", url = "#", className = "" }) => {
  return (
    <a href={url} target="_blank" className={`bg-primary text-dark text-xs md:text-base font-medium rounded-full flex items-center gap-0 p-0.5 md:p-1 ${className}`} aria-label={text}>
      <img src={iconSrc} alt={iconAlt} className="w-6 md:w-8" />
      <p>{text}</p>
    </a>
  );
};

export default SocialBtn;
