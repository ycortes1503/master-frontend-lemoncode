import * as React from "react";
import logo from "./../images/webpack.png";
import "./hello-world.module.scss";

export const HelloWorld: React.FC = () => {
  return (
    <div className="container">
      <p>¡Hello World From Parcel!</p>
      <img src={logo} alt="webpack image" />
    </div>
  );
};
