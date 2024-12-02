import { IconButton } from "components";
import { PageId, ROUTES } from "core";
import { AppLayout } from "layouts";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackArrowSVG } from "assets/svg/back-arrow.svg";
import styles from "./detail.module.scss";
import { Typography } from "@mui/material";
import { useRickAndMortyCharacter } from "hooks";
import { isNullOrUndefined } from "helpers";

const LITERALS = {
  detailPage: "Detail Page",
  back: "Back to list page",
};

export const DetailPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { character } = useRickAndMortyCharacter(params?.id);

  const handleGoBackToList = () => {
    navigate(`${ROUTES.LIST}/${params?.pageId}`);
  };

  let detailContent = null;

  if (params?.pageId === PageId.github) {
    detailContent = (
      <>
        <Typography variant="body2">User Id: {params?.id}</Typography>
      </>
    );
  }

  if (params?.pageId === PageId.rickandmorty && !isNullOrUndefined(character)) {
    const { image, name, status, gender, species, created } = character;
    const backgroundColor = status === "Alive" ? "green" : "red";

    detailContent = (
      <>
        <img src={image} alt={`Image of ${name}`} />
        <Typography variant="body2">{name}</Typography>
        <div className={styles["status-container"]}>
          <div
            className={styles["status-container__circle"]}
            style={{ backgroundColor }}
          />
          <Typography variant="body2">{`${status} - ${species}`}</Typography>
        </div>
      </>
    );
  }

  return (
    <AppLayout>
      <div className={styles.container}>
        <div className={styles.back}>
          <IconButton onClick={handleGoBackToList}>
            <BackArrowSVG />
            <h4>{LITERALS.back}</h4>
          </IconButton>
        </div>
        <h3 className={styles.title}>{LITERALS.detailPage}</h3>
        {detailContent}
      </div>
    </AppLayout>
  );
};
