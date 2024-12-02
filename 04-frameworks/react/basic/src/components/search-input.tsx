import * as React from "react";
import { IconButton, RowMember } from "components";
import { ReactComponent as CloseSVG } from "assets/svg/close.svg";
import styles from "./search-input.module.scss";
import { hasText } from "helpers";

export interface SearchInputProps {
  text?: string;
  onChangeSearchText: (text: string) => void;
}

export const SearchInput = ({ text, onChangeSearchText }: SearchInputProps) => {
  const [searchText, setSearchText] = React.useState<string>(text || "");
  const inputRef = React.useRef(null);

  const handleChangeSearchText = (text: string) => {
    setSearchText(text);
    onChangeSearchText(text);
  };

  const handleCleanInput = () => {
    inputRef.current.value = "";
    setSearchText("");
    onChangeSearchText("");
  };

  const isInputEmpty = !hasText(inputRef.current?.value);

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.container__input}
        type="text"
        value={searchText}
        onChange={(event) => handleChangeSearchText(event.target.value)}
      />
      {!isInputEmpty && (
        <IconButton onClick={handleCleanInput}>
          <CloseSVG />
        </IconButton>
      )}
    </div>
  );
};
