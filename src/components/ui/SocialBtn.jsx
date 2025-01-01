import React from "react";

const SocialBtn = ({ iconSrc, iconAlt, url, className }) => {
  return (
    <a href="#" className={`bg-primary text-dark text-base font-medium rounded-full flex items-center gap-0 p-1 ${className}`}>
      <img src={iconSrc} alt={iconAlt} className="w-8" />
      <p>{url}</p>
    </a>
  );
};

export default SocialBtn;
