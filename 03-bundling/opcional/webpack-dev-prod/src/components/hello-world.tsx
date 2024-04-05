import * as React from "react";
import logo from "./../images/webpack.png";
import styles from "./hello-world.module.scss";

export const HelloWorld: React.FC = () => {
  // this log is to test env variables
  console.log(`Api base: ${process.env.API_BASE}`);

  return (
    <div className={`${styles.container} p-16`}>
      <p className="text-4xl">¡Hello World From Webpack!</p>
      <img src={logo} alt="webpack image" />
    </div>
  );
};
