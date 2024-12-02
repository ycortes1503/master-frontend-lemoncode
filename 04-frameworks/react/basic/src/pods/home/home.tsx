import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import { AppLayout } from "layouts";
import { Link } from "@mui/material";
import { PageId, ROUTES } from "core";

const LITERALS = {
  homePage: "Home Page",
  github: "Go To GitHub Members Page",
  rickAndMorty: "Go To Rick and Morty Page",
};

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToGitHub = () => {
    navigate(`${ROUTES.LIST}/${PageId.github}`);
  };

  const handleGoToRickAndMorty = () => {
    navigate(`${ROUTES.LIST}/${PageId.rickandmorty}`);
  };

  return (
    <AppLayout>
      <div className={styles.container}>
        <h2>{LITERALS.homePage}</h2>
        <ul className={styles.container__list}>
          <li>
            <Link onClick={handleGoToGitHub}>{LITERALS.github}</Link>
          </li>
          <li>
            <Link onClick={handleGoToRickAndMorty}>
              {LITERALS.rickAndMorty}
            </Link>
          </li>
        </ul>
      </div>
    </AppLayout>
  );
};
