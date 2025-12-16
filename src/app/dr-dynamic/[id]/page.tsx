import { notFound } from "next/navigation";
import Header from "@/components/dragon-ball/Header";
import { getSingleCharacter } from "@/services/getCharacters";
import GoBack from "@/components/dragon-ball/GoBack";

interface ISingleCharacterProps {
  params: Promise<{ id: string }>;
}

const SingleCharacterById = async ({
  params,
}: ISingleCharacterProps) => {
  const { id } = await params;
  const charachterData = await getSingleCharacter(id);

  if (charachterData.id === undefined) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-5">
        <section className="flex justify-between items-center">
          <div className="w-1/3 flex justify-center">
            <img
              className="h-60"
              src={charachterData.image}
              alt={charachterData.name}
            />
          </div>
          <div className="w-2/3">
            <h2 className="font-bold text-3xl mb-5">
              {charachterData.name}
              <span className="font-normal text-gray-500 text-sm">
                {" "}
                {charachterData.race}
              </span>
            </h2>
            <p>{charachterData.description}</p>
          </div>
        </section>
        <section className="flex justify-center">
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
        <GoBack />
      </main>
    </>
  );
};

export default SingleCharacterById;
