export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const PageId = { github: "github", rickandmorty: "rickandmorty" };

export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
