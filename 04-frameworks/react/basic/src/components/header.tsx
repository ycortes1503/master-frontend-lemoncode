import React from "react";
import styles from "./header.module.scss";
import { ReactComponent as HomeSVG } from "assets/svg/home.svg";
import { IconButton } from "./icon-button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "core";

export const Header = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.container}>
      <IconButton className={styles.container__icon} onClick={handleGoToHome}>
        <HomeSVG />
      </IconButton>
      <div className={styles.container__title}>
        <p>React Application</p>
      </div>
    </div>
  );
};
