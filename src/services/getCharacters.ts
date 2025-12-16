import { ICharacters } from "@/models/Characters.models";
import { ISingleCharacter } from "@/models/SingleCharacter.models";

const API_URL = "https://dragonball-api.com/api/characters";

export const getCharacters = async () => {
  const requestApi = await fetch(API_URL);

  const data: ICharacters = await requestApi.json();

  return data.items;
};

export const getSingleCharacter = async (id: string) => {
  const requestApi = await fetch(
    `${API_URL}/${id}`, { cache: "force-cache" }
  );

  const data: ISingleCharacter = await requestApi.json();

  return data;
};