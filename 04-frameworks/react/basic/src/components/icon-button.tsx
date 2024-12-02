import React from "react";
import cx from "classnames";
import styles from "./icon-button.module.scss";

export interface IconButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const IconButton = ({
  children,
  className,
  onClick,
}: IconButtonProps) => {
  return (
    <button onClick={onClick} className={cx(styles.container, className)}>
      {children}
    </button>
  );
};
