import Link from "next/link";
import Image from "next/image";
import { ICharacter } from "@/models/Characters.models";

interface ICharacterCardProps {
  character: ICharacter;
}

const CharacterCard = ({
  character,
}: ICharacterCardProps) => {
  return (
    <div key={character.id} className="flex flex-col p-3 border border-gray-200 rounded text-center">
      <Link href={`/dr-dynamic/${character.id}`}>
        <Image
          src={character.image}
          alt={character.name}
          width={200}
          height={200}
          className="h-60 object-contain mx-auto"
        />
        <h3 className="font-bold">{character.name}</h3>
      </Link>
    </div>
  );
};

export default CharacterCard;
