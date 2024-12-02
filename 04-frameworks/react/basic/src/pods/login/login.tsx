import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { AppLayout } from "layouts";
import { ROUTES } from "core";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate(ROUTES.HOME);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <AppLayout>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleNavigation}>
          <div className={styles["input-container"]}>
            <label>Username: </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles["input-container"]}>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </AppLayout>
  );
};
