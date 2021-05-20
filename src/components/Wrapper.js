import React from "react";

// Wrapper

export default function Wrapper({ title, anotherTitle, children }) {
  return (
    <div className={title}>
      <h2>{title}</h2>
      {children} {/** Our children will stay within the wrapper */}
      <h2>{anotherTitle}</h2>
    </div>
  );
}
