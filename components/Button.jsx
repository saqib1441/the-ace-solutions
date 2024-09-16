import React from "react";

const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="bg-primary px-4 py-2 rounded text-white font-[500]"
    >
      {children}
    </button>
  );
};

export default Button;
