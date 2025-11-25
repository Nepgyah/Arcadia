import { Character } from "@/types/shared";
import { use } from "react";
import CharacterCard from "../characterCard";
import { Skeleton } from "@mui/material";

export default function MediaCharacterList(
    {
        characterPromise
    } : {
        characterPromise: Promise<Character[]>
    }
) {
    const characters = use(characterPromise)

    return (
        <div id="characters-container" className="flex-col flex-col--gap-sm">
            {
                characters.map((character: any, idx: number) => (
                    <CharacterCard 
                        key={idx}
                        characterId={character.character.id}
                        characterName={`${character.character.firstName} ${character.character.lastName ? character.character.lastName : ''}`}
                        characterDescription={character.role}
                        voiceActorId={character.character.playedBy?.id}
                        voiceActorName={character.character.playedBy ? `${character.character.playedBy.firstName} ${character.character.playedBy.lastName ? character.character.playedBy.lastName : ''}` : 'Unknown'}
                        voiceActorDescription='Japanese'
                    />
                ))
            }
        </div>
    )
}

export function MediaCharacterListSkeleton() {
    return (
        <div id="characters-container" className="flex-col flex-col--gap-sm">
            {Array.from({ length: 6}).map((_, i) => (
                <Skeleton animation={'wave'} key={i} variant="rectangular" height={'100px'} width={'100%'} />
            ))}
        </div>
    )
}