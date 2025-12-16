import Link from "next/link";
import { Metadata } from "next";
import { Characters } from "@/models/Characters.models";
import DotsMoveLoader from "../../components/icons/DotsMoveLoader";

export const metadata: Metadata = {
  title: "Dragon Ball Characters",
  description: "A list of Dragon Ball characters fetched from an external API.",
};

const getCharacters = async () => {
  const requestApi = await fetch(
    "https://dragonball-api.com/api/characters"
  );

  const data: Characters = await requestApi.json();

  return data.items;
};

const DraonBallApiPage = async () => {
  const characters = await getCharacters();

  return (
    <div className="bg-slate-100 min-h-screen">
      <header className="bg-slate-950 text-white p-5 text-center">
        <h1>Dragon Ball Characters</h1>
      </header>
      <main className="max-w-4xl mx-auto py-5">
        {characters.length == 0 && (
          <div className="text-center max-w-20 mx-auto">
            <span>
              <DotsMoveLoader />
            </span>
          </div>
        )}
        {characters.length > 0 && (
          <div className="grid grid-cols-4 gap-5">
            {characters.map((character) => (
              <div
                key={character.id}
                className=" text-center p-5"
              >
                <Link href={`/dr-dynamic/${character.id}`}>
                  <img
                    src={character.image}
                    alt={character.name}
                    className="h-60 mx-auto"
                  />
                  <h3 className="font-bold">
                    {character.name}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DraonBallApiPage;
