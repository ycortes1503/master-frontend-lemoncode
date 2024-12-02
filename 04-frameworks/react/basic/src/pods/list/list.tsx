import { useParams } from "react-router-dom";
import { AppLayout } from "../../layouts";
import { Github } from "./github";
import { PageId } from "core";
import { RickAndMorty } from "./rick-and-morty";

export const ListPage: React.FC = () => {
  const params = useParams();

  if (params?.pageId === PageId.github) {
    return (
      <AppLayout>
        <Github />
      </AppLayout>
    );
  }

  if (params?.pageId === PageId.rickandmorty) {
    return (
      <AppLayout>
        <RickAndMorty />
      </AppLayout>
    );
  }

  return <h2>PAGE NOT FOUND</h2>;
};
