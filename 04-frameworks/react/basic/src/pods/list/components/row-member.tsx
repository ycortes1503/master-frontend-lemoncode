import { MemberEntity, PageId } from "core/model";
import { Link } from "react-router-dom";
import styles from "./row-member.module.scss";
import { ROUTES } from "core";

interface RowMemberProps {
  member: MemberEntity;
}

export const RowMember = ({ member }: RowMemberProps) => {
  const linktToDetailPage = `${ROUTES.DETAIL}/${PageId.github}/${member.login}`;

  return (
    <>
      <img src={member.avatar_url} className={styles.avatar} />
      <span>{member.id}</span>
      <Link to={linktToDetailPage}>{member.login}</Link>
    </>
  );
};
