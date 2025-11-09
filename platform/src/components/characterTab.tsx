'use client';

import CharacterCard from "./characterCard";

export default function CharacterTab({ characters } : { characters: any[]}) {
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