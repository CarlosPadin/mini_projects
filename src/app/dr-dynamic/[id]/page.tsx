import { ISingleCharacter } from "@/models/Characte.models";

const getSingleCharacter = async (id: string) => {
  const requestApi = await fetch(
    `https://dragonball-api.com/api/characters/${id}`
  );

  const data: ISingleCharacter = await requestApi.json();

  return data;
};

interface ISingleCharacterProps {
  params: Promise<{ id: string }>;
}

const SingleCharacterById = async ({
  params,
}: ISingleCharacterProps) => {
  const { id } = await params;
  const charachterData = await getSingleCharacter(id);

  return (
    <>
      <header className="bg-slate-900 text-white p-5 text-center">
        <h1>Dragon Ball Characters</h1>
      </header>
      <main className="max-w-4xl mx-auto py-5">
        <section className="flex justify-between items-start">
          <div className="w-1/3">
            <img
              className="h-60"
              src={charachterData.image}
              alt={charachterData.name}
            />
          </div>
          <div className="w-2/3">
            <h2 className="font-bold text-2xl">
              {charachterData.name}
              <span className="font-normal text-gray-500 text-sm">
                {" "}
                {charachterData.race}
              </span>
            </h2>
            <p>{charachterData.description}</p>
          </div>
        </section>
        <section>
          {charachterData.transformations.length == 0 ? (
            <p>Este personaje no tiene transformaciones</p>
          ) : (
            <div className="flex gap-5 flex-wrap">
              {charachterData.transformations.map(
                (transformation) => (
                  <div
                    key={transformation.id}
                    className="text-center p-5 bg-slate-100 rounded mt-10"
                  >
                    <img
                      className="h-20 mx-auto"
                      src={transformation.image}
                      alt={transformation.name}
                    />
                    <h4>{transformation.name}</h4>
                  </div>
                )
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default SingleCharacterById;
