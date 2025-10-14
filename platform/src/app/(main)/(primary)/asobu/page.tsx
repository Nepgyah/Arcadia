'use client';

import React from "react";
import { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import WIP from "@/components/wip";
import EntryCard from "@/components/entryCard";
import { apiGET } from "@/util/api/api";
import { Game } from "@/types/asobu";
import ArcHeader from "@/components/arcHeader";

interface APIProps {
    latest_games: Game[],
    top_rated_games: Game[]
}
export default function AsobuHome() {

    const [isLoading, setIsLoading] = useState(true);
    const [latestGames, setLatestGames] = useState<Game[]>([]);
    const [allTimeGames, setAllTimeGames] = useState<Game[]>([])

    useEffect(() => {
        apiGET<APIProps>('asobu/home/')
        .then((res) => {
            setLatestGames(res.latest_games);
            setAllTimeGames(res.top_rated_games)
        })
    }, [])
    
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Asobu</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-miru-home">
                <div className="grid grid--side-col">
                    <div className="flex-row flex-row--gap-md">
                        <div id="seasonal">
                            <ArcHeader title={'Latest'} />
                            <div className="flex-col flex-col--gap-sm">
                                {
                                    latestGames &&
                                    latestGames.map((game: any, key: number) => (
                                        <EntryCard 
                                            key={key} 
                                            app="asobu" 
                                            title={game.title} 
                                            clickLink={`/asobu/game/${game.id}/${game.slug}`} 
                                            imageLink={`/storage/asobu/${game.id}.jpg`}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div id="all-time">
                            <ArcHeader title="All Time"/>
                            <div className="flex-col flex-col--gap-sm">
                                {
                                    allTimeGames &&
                                    allTimeGames.map((game: any, key: number) => (
                                        <EntryCard 
                                            key={key} 
                                            app="asobu" 
                                            title={game.title} 
                                            clickLink={`/asobu/game/${game.id}/${game.slug}`} 
                                            imageLink={`/storage/asobu/${game.id}.jpg`}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="side-col">
                        <h2 className="app-font--miru border-bottom">Friend Activity</h2>
                        <WIP />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}