import { ReactComponent as NotFoundSVG } from "assets/svg/404.svg";
import styles from "./not-found.module.scss";
import { AppLayout } from "layouts";

export const NotFound = () => {
  return (
    <AppLayout>
      <div className={styles.container}>
        <NotFoundSVG className={styles.container__image} />
      </div>
    </AppLayout>
  );
};
