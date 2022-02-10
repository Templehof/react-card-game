import React from "react";

export default function Card(props) {
  return (
    <img
      src={props.src}
      onClick={props.handleClick}
      clicked={props.clicked}
      id={props.id}
      
    />
  );
}
