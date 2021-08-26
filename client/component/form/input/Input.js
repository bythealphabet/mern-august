import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import inputStyles from "./inputStyles";

function Input({ change, label, placeholder, type, value }) {
  const inputValue = (e) => change(e.target.value);

  return (
    <div className="input-box" css={inputStyles}>
      <input type="hidden" display="hidden" />
      <label className="label">{label}</label>
      <input
        onChange={inputValue}
        className="input"
        placeholder={placeholder}
        type={type}
        value={value}
        autoComplete={type}
      />
    </div>
  );
}
export default Input;
