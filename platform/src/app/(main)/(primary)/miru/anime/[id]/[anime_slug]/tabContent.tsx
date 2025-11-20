'use client';

import React from "react";
import { useState } from "react";

import { Chip } from "@mui/material";

import ArcTab from "@/components/arcTab";
import CharacterTab from "@/components/characterTab";
import KikuCard from "@/app/(main)/(secondary)/kiku/kikuCard";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";
import MediaFlowCard from "@/components/mediaFlowCard";
import WIP from "@/components/wip";

import { Anime, AnimeTheme } from "@/types/miru";

export default function AnimeDetailTabContent({ anime } : { anime: Anime }){
    
    const [tab, setTab] = useState<string>('0');

    return (
        <React.Fragment>
            <div id="tab-container" className="flex-col flex-col--gap-sm m-b-lg">
                <ArcTab label="Overview" value="0" currentValue={tab} icon="info" setTabFunc={setTab} />
                <ArcTab label="Characters" value="1" currentValue={tab} icon="people" setTabFunc={setTab} />
                <ArcTab label="Summary" value="2" currentValue={tab} icon="target" setTabFunc={setTab} />
                <ArcTab label="Stats" value="3" currentValue={tab} icon="graph" setTabFunc={setTab} />
                <ArcTab label="Reviews" value="4" currentValue={tab} icon="comment" setTabFunc={setTab} />
            </div>
            <div hidden={tab !== '0'}>
                <MainTab anime={anime}/>
            </div>
            <div hidden={tab !== '1'}>
                <CharacterTab characters={anime.characters}/>
            </div>
            <div hidden={tab !== '2'}>
                <ArcHeader title="Synopsis" />
                <p>{anime.summary}</p>
            </div>
             <div hidden={tab !== '3'}>
                <ArcHeader title="Score Breakdown" />
                <WIP />
            </div>
            <div hidden={tab !== '4'}>
                <div className="flex-row flex-row--gap-md">
                    <div id="top-reviews">
                        <ArcHeader title="Top Reviews" />
                        <WIP />
                    </div>
                    <div id="latest-reviews">
                        <ArcHeader title="Latest Reviews" />
                        <WIP />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function MainTab({ anime } : { anime: Anime }) {
    return (
        <div className="flex-row flex-row--gap-md">
            <div className="grid grid--2-col">
                <div id="genres">
                    <ArcHeader title="Genres" />
                    {
                        anime.genres.length !== 0 ?
                            <div className="flex-col flex-col--gap-sm">
                                {
                                    anime.genres.map((genre: any, idx: number) => (
                                        <Chip className="bg-miru-base" key={idx} label={genre.name} />
                                    ))
                                }
                            </div>
                        :
                            <p>No genres added</p>
                    }
                </div>
                <div id="franchise">
                    <ArcHeader title="Franchise" />
                    {
                        anime.franchise ? 
                            <WIP />
                        :
                            <p>No Franchise Found</p>
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
                    }
                </div>
            </div>
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