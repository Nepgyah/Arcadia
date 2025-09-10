'use client';

import React from "react";
import { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import WIP from "@/components/platform/wip";
import EntryCard from "@/components/platform/entryCard";
import { apiGET } from "@/util/api/api";
import { Game } from "@/types/asobu";

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
            <div id="page-asobu-home"  className="page-content page-content--two-col page-content--reversed">
                <div className="page-content__left-column divider divider--vertical padding-right--lg">
                    <div id="latest">
                        <h2>Latest Games</h2>
                        <div className="layout-grid-5">
                            {
                                latestGames &&
                                latestGames.map((game: Game, key: number) => (
                                    <EntryCard 
                                        key={key} 
                                        app="asbou" 
                                        title={game.title} 
                                        clickLink={`/platform/asobu/game/${game.id}/${game.slug}`} 
                                        imageLink={`/storage/asobu/${game.id}.jpg`}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div id="rated">
                        <h2>Top Games All Time</h2>
                        <div className="layout-grid-5">
                            {
                                allTimeGames &&
                                allTimeGames.map((game: Game, key: number) => (
                                    <EntryCard 
                                        key={key} 
                                        app="asbou" 
                                        title={game.title} 
                                        clickLink={`/platform/asobu/game/${game.id}/${game.slug}`} 
                                        imageLink={`/storage/asobu/${game.id}.jpg`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
                <div className="page-content__right-column">
                    <h2 className="app-font--miru border-bottom">Details</h2>
                    <WIP />
                </div>
            </div>
        </React.Fragment>
    )
}