import { Anime, AnimeTheme } from "@/types/miru";
import { Character } from "@/types/shared";

import React, { Suspense, use } from "react";
import { useState } from "react";

import { Chip, Skeleton } from "@mui/material";

import ArcTab from "@/components/arcTab";
import CharacterTab from "@/components/characterTab";
import KikuCard from "@/app/(main)/(secondary)/kiku/kikuCard";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";
import MediaFlowCard from "@/components/mediaFlowCard";
import WIP from "@/components/wip";
import wait from "@/util/wait";
import { MediaCharacterListSkeleton } from "@/components/media/characterList";
import ArcChip from "@/components/arcChip";


export default function AnimeOverviewTab(
    {
        animePromise,
        characterPromise,
    } : {
        animePromise: Promise<Anime>,
        characterPromise: Promise<Character[]>
    }
) {

    return (
        <div className="flex-row flex-row--gap-md">
            <div className="grid grid--2-col">
                <div id="genres">
                    <ArcHeader title="Genres" />
                    <Suspense fallback={
                        <div className="flex-col flex-col--gap-sm">
                            {Array.from({ length: 5}).map((_, i) => (
                                <Skeleton height={'54px'} width={'90px'} variant="rectangular" animation={'wave'}/>
                            ))}
                        </div>
                    }>
                        <OverviewGenres animePromise={animePromise} />
                    </Suspense>
                </div>
                <div id="franchise">
                    <ArcHeader title="Franchise" />
                    {/* {
                        anime.franchise ? 
                            <WIP />
                        :
                            <p>No Franchise Found</p>
                    } */}
                </div>
            </div>
            <div id="anime-flow">
                <ArcHeader title="Anime Flow" />
                <div className="grid grid--2-col">
                    {/* {
                        anime.previousAnime ?
                            <MediaFlowCard 
                                image={`/storage/miru/${anime.previousAnime.fromAnime.id}.jpg`}
                                relation="Prequel"
                                mediaName={anime ? anime.previousAnime.fromAnime.title : 'Loading'}
                                mediaLink={`/miru/anime/${anime.previousAnime.fromAnime.id}/${anime?.previousAnime.fromAnime.slug}`}              
                            />
                        :
                            <p>No Prequel Anime</p>
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
                            <p>No Sequel Anime</p>
                    } */}
                </div>
            </div>
            <div id="characters">
                <ArcHeader title="Characters" />
                <Suspense fallback={ <MediaCharacterListSkeleton />}>
                    <OverviewCharacters characterPromise={characterPromise} />
                </Suspense>
            </div>
            <div id="themes">
                {/* <div className="grid grid--2-col">
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
                </div> */}
            </div>
        </div>
    )
}

function OverviewCharacters(
    {
        characterPromise
    } : {
        characterPromise: Promise<Character[]>
    }
) {
    const characters = use(characterPromise);

    return (
        <div id="characters-container" className="flex-col flex-col--gap-sm">
            {
                characters.slice(0,6).map((character: any, idx: number) => (
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

function OverviewGenres(
    {
        animePromise
    } : {
        animePromise: Promise<Anime>
    }
) {

    const anime = use(animePromise)
    return (
        <>
        {
            anime.genres.length !== 0 ?
                <div className="flex-col flex-col--gap-sm">
                    {
                        anime.genres.map((genre: any, idx: number) => (
                            <ArcChip key={genre.name} label={genre.name} app="miru"/>
                        ))
                    }
                </div>
            :
                <p>No genres added</p>
        }
        </>
    )
}