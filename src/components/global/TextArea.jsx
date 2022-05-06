import React from "react";

const TextArea = ({ errorMessage, label, value, onChange, ...rest }) => {
  return (
    <div className="input-container text-black">
      <textarea
        type="text"
        className="input-outlined input-outlined-green h-20 text-black"
        autoComplete="off"
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label
        style={{ backgroundColor: "white" }}
        htmlFor="email"
        className="input-label text-black"
      >
        {label} *
      </label>

      <small style={{ top: "6.5rem" }} className="error text-red-500 text-sm">
        {" "}
        {errorMessage}{" "}
      </small>
    </div>
  );
};

export default TextArea;
