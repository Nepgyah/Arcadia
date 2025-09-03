'use client';
import EntryCard from "@/components/platform/entryCard";
import WIP from "@/components/platform/wip";
import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

export default function AsobuHome() {

    const [isLoading, setIsLoading] = useState(true);
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        apiGET<any>('asobu/home/')
        .then((res) => {
            setGameList(res.games)
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
                    <div id="seasonal">
                        <h2>Latest Games</h2>
                        <div className="layout-grid-5">
                            {
                                gameList &&
                                gameList.map((game: any, key: number) => (
                                    <EntryCard 
                                        key={key} 
                                        app="asbou" 
                                        title={game.title} 
                                        clickLink={`/platform/miru/anime/${game.slug}`} 
                                        imageLink={`/storage/miru/${game.slug}.jpg`}
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