import React from "react";

export default function Banner({ children, title, subtitle, image }) {
  return (
    <div className="banner">
      <img src={image}></img>

      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
