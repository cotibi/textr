import React from "react";

const Card = (props) => {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <h1>Title</h1>
      <h2>{props.title}</h2>
      <p>Body</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Card;
