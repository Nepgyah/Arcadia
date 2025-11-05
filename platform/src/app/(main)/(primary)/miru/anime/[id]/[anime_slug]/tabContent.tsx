'use client';

import { Anime } from "@/types/miru";
import AnimeDetailMainTab from "./tabs/mainTab";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import ArcTab from "@/components/arcTab";
import CharacterTab from "@/components/characterTab";

export default function AnimeDetailTabContent({ anime } : { anime: Anime }){
    
    const [tab, setTab] = useState<string>('0');

    return (
        <React.Fragment>
            <div id="tab-container" className="flex-col flex-col--gap-sm m-b-lg">
                <ArcTab label="Overview" value="0" currentValue={tab} icon="info" setTabFunc={setTab} />
                <ArcTab label="Characters" value="1" currentValue={tab} icon="people" setTabFunc={setTab} />
            </div>
            <div hidden={tab !== '0'}>
                <AnimeDetailMainTab anime={anime}/>
            </div>
            <div hidden={tab !== '1'}>
                <CharacterTab characters={anime.characters}/>
            </div>
            <div hidden={tab !== '2'}>stats</div>
        </React.Fragment>
    )
}