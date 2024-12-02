import React from "react";
import { Footer, Header } from "../components";
import styles from "./app.layout.module.scss";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.container__main}>{children}</main>
      <Footer />
    </div>
  );
};
