'use client';

import KikuCard from "@/app/(main)/(secondary)/kiku/kikuCard";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";
import MediaFlowCard from "@/components/mediaFlowCard";
import { Anime, AnimeTheme } from "@/types/miru";
import React from "react";

export default function AnimeDetailMainTab({ anime } : { anime: Anime }) {
    return (
        <div className="flex-row flex-row--gap-md">
            <div id="characters">
                <ArcHeader title="Characters" />
                <div id="characters-container" className="flex-col flex-col--gap-sm">
                    {
                        anime.characters.slice(0,6).map((character: any, idx: number) => (
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
            </div>
            <div id="anime-flow">
                <ArcHeader title="Anime Flow" />
                <div className="grid grid--2-col">
                    {
                        anime.previousAnime ?
                            <MediaFlowCard 
                                image={`/storage/miru/${anime.previousAnime.fromAnime.id}.jpg`}
                                relation="Prequel"
                                mediaName={anime ? anime.previousAnime.fromAnime.title : 'Loading'}
                                mediaLink={`/miru/anime/${anime.previousAnime.fromAnime.id}/${anime?.previousAnime.fromAnime.slug}`}              
                            />
                        :
                            <p>No Previous Anime</p>
                    }
                    {
                        anime.nextAnime ?
                            <MediaFlowCard 
                                image={`/storage/miru/${anime.nextAnime.toAnime.id}.jpg`}
                                relation="Prequel"
                                mediaName={anime ? anime.nextAnime.toAnime.title : 'Loading'}
                                mediaLink={`/miru/anime/${anime.nextAnime.toAnime.id}/${anime.nextAnime.toAnime.slug}`}              
                            />
                        :
                            <p>No Previous Anime</p>
                    }
                </div>
            </div>
            <div id="themes">
                <div className="grid grid--2-col">
                    <div>
                        <ArcHeader title="Openings" />
                        <div className="flex-row flex-row--gap-sm row-divider">
                            {
                                anime.themes.opening.length ?
                                    anime.themes.opening.map((op: AnimeTheme, idx: number) => (
                                    <KikuCard 
                                        key={idx}
                                        title={op.title}
                                        subTitle={`Eps ${op.startingEpisode} - ${op.endingEpisode}`}
                                        id={op.id}
                                        number={idx + 1}
                                        mainLink={`/kiku/album/${op.id}`}
                                        type="album"                                                />
                                ))
                                :
                                    <p>No Opening Themes Found</p>
                            }
                        </div>
                    </div>
                    <div>
                        <ArcHeader title="Endings" />
                        <div className="flex-row flex-row--gap-sm row-divider">
                            {
                                anime.themes.ending.length ?
                                    anime.themes.ending.map((ed: AnimeTheme, idx: number) => (
                                        <KikuCard 
                                            key={idx}
                                            title={ed.title}
                                            subTitle={`Eps ${ed.startingEpisode} - ${ed.endingEpisode}`}
                                            id={ed.id}
                                            number={idx + 1}
                                            mainLink={`/kiku/album/${ed.id}`}
                                            type="album"                                              />
                                    ))
                                :
                                    <p>No Ending Themes Found</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}