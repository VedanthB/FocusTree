import React from "react";

const Input = ({ type, label, value, onChange, errorMessage, ...rest }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        className="input-outlined input-outlined-green text-black"
        autoComplete="off"
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label
        style={{ backgroundColor: "white" }}
        className="input-label text-black"
      >
        {label} *
      </label>

      <small className="error text-red-500 text-sm"> {errorMessage} </small>
    </div>
  );
};

export default Input;
