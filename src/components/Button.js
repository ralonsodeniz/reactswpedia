import React from "react";

const Button = ({ value, onClick, disabled }) => {
  return (
    <button
      value={value}
      onClick={onClick}
      className="ma1 br-pill grow yellow b--yellow flex flex-auto justify-center"
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
