import { API_RICK_AND_MORTY } from "constants/app.constants";
import { CharacterEntity } from "core/model";
import { isNullOrUndefined } from "helpers";
import * as React from "react";

export const useRickAndMortyCharacters = (searchText: string) => {
  const [page, setPage] = React.useState(1);
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

  const handleChangeSearchText = (page: number) => {
    if (!isNullOrUndefined(page)) {
      setPage(page);
    }
  };

  React.useEffect(() => {
    fetch(`${API_RICK_AND_MORTY}/?page=${page}&name=${searchText}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return [];
      })
      .then((result) => setCharacters(result?.results));
    handleChangeSearchText;
  }, [searchText, page]);

  return {
    characters,
    onChangeSearchText: handleChangeSearchText,
  };
};

export const useRickAndMortyCharacter = (id: string) => {
  const safeId = Number(id);

  const [character, setCharacter] = React.useState<CharacterEntity>(null);

  React.useEffect(() => {
    fetch(`${API_RICK_AND_MORTY}/${safeId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return [];
      })
      .then((json) => setCharacter(json));
  }, [id]);

  return {
    character,
  };
};
