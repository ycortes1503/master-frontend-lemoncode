import * as React from "react";
import { SearchInput } from "components";
import styles from "./rick-and-morty.module.scss";
import { Pagination } from "@mui/material";
import { useDebounce, useLocalStorage, useRickAndMortyCharacters } from "hooks";
import { KEY_LOCAL_STORAGE_RICKANDMORTY } from "constants/app.constants";
import { Card } from "./components";
import { PageId, ROUTES } from "core";
import { useNavigate } from "react-router-dom";

export const RickAndMorty = () => {
  const navigate = useNavigate();

  const [page, setPage] = React.useState(1);
  const { value, setValue } = useLocalStorage<string>(
    KEY_LOCAL_STORAGE_RICKANDMORTY
  );
  const [searchText, setSearchText] = React.useState<string>(value || "");
  const { debouncedText } = useDebounce(searchText);
  const { characters, onChangeSearchText } =
    useRickAndMortyCharacters(debouncedText);

  const handleChangeSearchText = (text: string) => {
    setPage(1);
    setValue(text);
    setSearchText(text);
    onChangeSearchText(page);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    event.preventDefault();
    setPage(page);
    onChangeSearchText(page);
  };

  const handleGoToDetailPage = (characterId: number) => {
    const linktToDetailPage = `${ROUTES.DETAIL}/${PageId.rickandmorty}/${characterId}`;
    navigate(linktToDetailPage);
  };

  return (
    <section className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>Rick and Morty characters by name</h3>
        <SearchInput
          text={searchText}
          onChangeSearchText={handleChangeSearchText}
        />
      </div>

      <div className={styles["cards-container"]}>
        {characters?.map((character) => (
          <Card
            className={styles.card}
            key={character.id}
            character={character}
            onClick={() => handleGoToDetailPage(character.id)}
          />
        ))}
      </div>

      <Pagination
        count={5}
        shape="rounded"
        page={page}
        onChange={handleChangePage}
      />
    </section>
  );
};
