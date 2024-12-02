import * as React from "react";
import { SearchInput } from "components";
import styles from "./github.module.scss";
import { Pagination } from "@mui/material";
import { useDebounce, useGithubUsers, useLocalStorage } from "hooks";
import { KEY_LOCAL_STORAGE_GITHUB } from "constants/app.constants";
import { RowMember } from "./components";

export const Github = () => {
  const [page, setPage] = React.useState(1);
  const { value, setValue } = useLocalStorage<string>(KEY_LOCAL_STORAGE_GITHUB);
  const [searchText, setSearchText] = React.useState<string>(
    value || "lemoncode"
  );
  const { debouncedText } = useDebounce(searchText);
  const { members, onChangeSearchText } = useGithubUsers(debouncedText);

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

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Github members by organisation name</h3>
      <SearchInput
        text={searchText}
        onChangeSearchText={handleChangeSearchText}
      />

      <div className={styles.container}>
        <span className={styles.container__header}>Avatar</span>
        <span className={styles.container__header}>Id</span>
        <span className={styles.container__header}>Name</span>
        {members?.map((member) => (
          <RowMember key={member.id} member={member} />
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
