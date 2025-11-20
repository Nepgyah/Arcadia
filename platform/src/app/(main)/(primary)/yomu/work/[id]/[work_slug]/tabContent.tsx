'use client';

import React from "react";
import { useState } from "react";

import { Chip } from "@mui/material";

import ArcTab from "@/components/arcTab";
import CharacterTab from "@/components/characterTab";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";
import WIP from "@/components/wip";

export default function WorkDetailTabContent({ work } : { work: any }){
    
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
                <MainTab work={work}/>
            </div>
            <div hidden={tab !== '1'}>
                <CharacterTab characters={work.characters}/>
            </div>
            <div hidden={tab !== '2'}>
                <ArcHeader title="Synopsis" />
                <p>{work.summary}</p>
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

function MainTab({ work } : { work: any }) {
    return (
        <div className="flex-row flex-row--gap-md">
            <div className="grid grid--2-col">
                <div id="genres">
                    <ArcHeader title="Genres" />
                    {
                        work.genres?.length !== 0 ?
                            <div className="flex-col flex-col--gap-sm">
                                {
                                    work.genres.map((genre: any, idx: number) => (
                                        <Chip className="bg-yomu-base" key={idx} label={genre.name} />
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
                        work.franchise ? 
                            <WIP />
                        :
                            <p>No Franchise Found</p>
                    }
                </div>
            </div>
            <div id="characters">
                <ArcHeader title="Characters" />
                <div id="characters-container" className="flex-col flex-col--gap-sm">
                    {
                        work.characters.slice(0,6).map((character: any, idx: number) => (
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
        </div>
    )
}