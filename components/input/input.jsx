import React from "react";

const Input = ({ type, placeholder, classname }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className={classname} />
    </div>
  );
};

export default Input;
