import cx from "classnames";
import { CharacterEntity } from "core";
import styles from "./card.module.scss";

export interface CardProps {
  character: CharacterEntity;
  className?: string;
  onClick: (id: number) => void;
}

export const Card = ({ character, className, onClick }: CardProps) => {
  const {
    id,
    name,
    image,
    species,
    status,
    created,
    episode,
    gender,
    type,
    url,
  } = character;

  return (
    <div
      className={cx(styles.container, className)}
      aria-label={name}
      data-testid={id}
      onClick={() => onClick(id)}
    >
      <img src={image} alt={`Image of ${name}`} />
      <div className={styles.footer}>
        <span>{name}</span>
      </div>
    </div>
  );
};
