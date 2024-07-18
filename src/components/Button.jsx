/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ text, className, handleSubmit }) => {
  return (
    <button
      type="submit"
      data-testid="button-test-id"
      className={className}
      onClick={handleSubmit}
    >
      {text}
    </button>
  );
};
export default Button;
