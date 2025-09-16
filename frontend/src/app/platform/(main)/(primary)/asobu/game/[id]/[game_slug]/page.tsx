'use client';

import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

import { Breadcrumbs, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import CharacterAvatar from "@/components/platform/characterAvatar";
import InfoItem from "@/components/platform/infoItem";
import RelationCard from "@/components/platform/relationCard";
import TagChip from "@/components/platform/chip";
import WIP from "@/components/platform/wip";

import { Character } from "@/types/shared";
import { Company, Game } from "@/types/asobu";

export default function GameDetails() {
    const params = useParams();
    const [game, setGame] = useState<Game>()
    const [developers, setDevelopers] = useState<string>()
    const [publishers, setPublishers] = useState<string>()

    useEffect(() => {
        apiGET<Game>(`asobu/game/${params.id}/`)
        .then((res) => {
            setGame(res)
            let devList = ''
            let pubList = ''
            res.developers.forEach((dev : Company) => {
                devList += ` ${dev.name}`
            })
            setDevelopers(devList)

            res.publishers.forEach((pub : Company) => {
                pubList += ` ${pub.name}`
            })
            setPublishers(pubList)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Game</Typography>
                <Typography>{game?.title}</Typography>
            </Breadcrumbs>
            <div className="media-detail page-content">
                <div className="two-col-section two-col-section--uneven">
                    <div id="left-column" className="row-gap-md">
                        <img 
                            id="image" 
                            className="media-image"
                            src={`/storage/asobu/${game?.id}.jpg`} 
                            alt={game?.title}
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/global/404-resource.jpg'
                            }} 
                        />
                        <div>
                            <h2>Quick Access</h2>
                            <WIP />
                        </div>
                        <div>
                            <h2>Socials</h2>
                            <WIP />
                        </div>
                    </div>
                    <div id="right-column" className="row-gap-md">
                        <div id="primary">
                            <div id="overview" className="vertical-divider-right p-right-md row-gap-md">
                                <div id="at-a-glance">
                                    <div className="row-gap-md">
                                        <div id="quick-stats" className="gray-container col-gap-s">
                                            <InfoItem label="Status" value={game?.status} />
                                            <InfoItem label="ESRB" value={game?.esrb_rating} />
                                            <InfoItem label="PEGI" value={game?.pegi_rating} />
                                        </div>
                                        <div id="metrics">
                                            <div id="arcadia-score" className="gray-container flex flex--small-gap">
                                                <p className="bold">{game?.score}</p>
                                                <p>{game?.users} users</p>
                                            </div>
                                            <div id="tags">
                                                <h2>Genres</h2>
                                                <div>
                                                    {
                                                        game?.genres.length === 0 ?
                                                            <p>No genre tags added</p>
                                                        :
                                                            game?.genres.map((genre: any, index: number) => (
                                                                <TagChip key={index} value={genre.name} app="asobu"/>
                                                            ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="promo-video">
                                        <h2>Promo Video</h2>
                                        <WIP />
                                    </div>
                                </div>
                                <div id="summary">
                                    <h2>Summary</h2>
                                    <p>{game?.summary}</p>
                                </div>
                            </div>
                            <div id="primary-right" className="p-left-md row-gap-md">
                                <div>
                                    <h2>Details</h2>
                                    <InfoItem label="Campaign" value={game ? game.has_campaign_mode ? 'Yes' : 'No' : 'Loading'} />
                                    <InfoItem label="PvP" value={game ? game.has_pvp_mode ? 'Yes' : 'No' : 'Loading'} />
                                    <InfoItem label="PvE" value={game ? game.has_pve_mode ? 'Yes' : 'No' : 'Loading'} />
                                    <InfoItem label="On PC" value={game ? game.is_on_pc ? 'Yes' : 'No' : 'Loading'} />
                                    <InfoItem label="On Console" value={game ? game.is_on_console ? 'Yes' : 'No' : 'Loading'} />
                                </div>
                                <div>
                                    <h2>Production</h2>
                                    <InfoItem label="Developers" value={developers} />
                                    <InfoItem label="Publishers" value={publishers} />
                                </div>
                            </div>
                        </div>
                        <div id="secondary">
                            <div id="relations" className="vertical-divider-right p-right-md">
                                <h2>Related Games</h2>
                                <div>
                                    <div id="previous" className="row-gap-md">
                                        {
                                            game?.previous_games.length === 0 ?
                                                <p>No previous games</p>
                                            :
                                            game?.previous_games.map((game: any, index: number ) => (
                                                <RelationCard 
                                                    key={index}
                                                    name={game.name} 
                                                    relation={game.relation} 
                                                    link={`/platform/asobu/game/${game.id}/${game.slug}`}
                                                    imageLink={`/storage/asobu/${game.id}.jpg`}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div id="next" className="row-gap row-gap--xs">
                                        {
                                            game?.next_games.length === 0 ?
                                                <p>No next games</p>
                                            :
                                            game?.next_games.map((game: any, index: number ) => (
                                                <RelationCard 
                                                    key={index}
                                                    name={game.name} 
                                                    relation={game.relation} 
                                                    link={`/platform/asobu/game/${game.id}/${game.slug}`}
                                                    imageLink={`/storage/asobu/${game.id}.jpg`}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div id="characters">
                                <h2>Characters</h2>
                                <div className="row-gap-md">
                                    {
                                        game?.characters &&
                                        game?.characters.map((character: Character, index: number) => (
                                            <CharacterAvatar key={index} character={character} app='miru' />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}