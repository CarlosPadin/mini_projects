import { Metadata } from "next";
import Header from "@/components/dragon-ball/Header";
import CharactersList from "@/components/dragon-ball/CharactersList";

export const metadata: Metadata = {
  title: "Dragon Ball Characters",
  description:
    "A list of Dragon Ball characters fetched from an external API.",
};

const DraonBallApiPage = async () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto py-5">
        <CharactersList />
      </main>
    </div>
  );
};

export default DraonBallApiPage;
