import React from "react";

const Input = ({ type, placeholder, name }) => {
  return (
    <input type={type} placeholder={placeholder} name={name} className="border-0 outline-none py-2 px-4 text-xl text-white bg-[#1f1f1f] rounded-md inline-block flex-1 placeholder:text-white w-auto" />
  );
};

export default Input;
