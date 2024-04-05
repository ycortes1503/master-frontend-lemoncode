import * as React from "react";
import image from "./../images/vite-react-typescript.png";
import styles from "./hello-world.module.scss";

export const HelloWorld: React.FC = () => {
  // this log is to test env variables
  console.log(`Api base: ${import.meta.env.VITE_API_BASE}`);

  return (
    <div className={styles.container}>
      <p>¡Hello World From Vite!</p>
      <img src={image} alt="vite react and typescript image" />
    </div>
  );
};
