import { forwardRef } from "react";
import React from "react";
/* eslint-disable react/prop-types */
const TextField = forwardRef(function Textfield(props, ref) {
  const onChange = (e) => {
    if (props.handleSubmit) props.handleSubmit(e.target.value);
  };

  // useEffect(() => {
  //   if (text.length > 5) alert("Length>5");
  //   console.log(text);
  // }, [text]);

  return (
    <span>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        data-testid="texttest"
        className="logininput"
        id={props.id}
        placeholder={props.label}
        value={props.value}
        onChange={onChange}
        ref={ref}
      />
      {props.error ? <div>{props.error}</div> : ""}
    </span>
  );
});
export default TextField;
