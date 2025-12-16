import DotsMoveLoader from "../icons/DotsMoveLoader";
import { getCharacters } from "@/services/getCharacters";
import CharacterCard from "./CharacterCard";

const CharactersList = async () => {
  const characters = await getCharacters();
  return (
    <div>
      {characters.length == 0 && (
        <div className="text-center max-w-20 mx-auto">
          <span>
            <DotsMoveLoader />
          </span>
        </div>
      )}
      {characters.length > 0 && (
        <div className="grid gap-3 p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CharactersList;
