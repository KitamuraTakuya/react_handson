import React from "react";

const ColofulMsg = props => {
  return (
    <>
      <p style={{ color: props.color }}>{props.children}</p>
    </>
  );
};

export default ColofulMsg;
