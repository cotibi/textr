import React from "react";

const Input = (props) => {
  return (
    <div className="form">
      <input type={props.type} onChange={props.onChange} value={props.value} />
    </div>
  );
};

export default Input;
