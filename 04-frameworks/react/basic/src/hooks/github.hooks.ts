import { API_GITHUB, ITEMS_PER_PAGE } from "constants/app.constants";
import { MemberEntity } from "core/model";
import { isNullOrUndefined } from "helpers";
import * as React from "react";

export const useGithubUsers = (searchText: string) => {
  const [page, setPage] = React.useState(1);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const handleChangeSearchText = (page: number) => {
    if (!isNullOrUndefined(page)) {
      setPage(page);
    }
  };

  React.useEffect(() => {
    fetch(
      `${API_GITHUB}/${searchText}/members?per_page=${ITEMS_PER_PAGE}&page=${page}`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return [];
      })
      .then((json) => setMembers(json));
    handleChangeSearchText;
  }, [searchText, page]);

  return {
    members,
    onChangeSearchText: handleChangeSearchText,
  };
};
