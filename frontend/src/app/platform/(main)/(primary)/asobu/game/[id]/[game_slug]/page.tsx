'use client';

import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

import '@/styles/platform/pages/miru/anime-detail.scss';
import { Anime } from "@/util/types/miru";
import InfoItem from "@/components/platform/infoItem";
import { Character } from "@/util/types/shared";
import CharacterAvatar from "@/components/platform/characterAvatar";
import WIP from "@/components/platform/wip";
import RelationCard from "@/components/platform/relationCard";
import TagChip from "@/components/platform/chip";
import { Company, Game } from "@/util/types/asobu";

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
            <div id="page-miru-anime-detail" className="page-content page-content--two-col">
                <div className="page-content__left-column">
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
                <div className="page-content__right-column row-gap row-gap--md">
                    <div id="primary">
                        <div id="primary-left" className="divider divider--vertical padding-right--md row-gap row-gap--md">
                            <div id="overview">
                                <div id="quick-stats" className="row-gap row-gap--md">
                                    <div className="gray-container flex flex--small-gap">
                                        <InfoItem label="Status" value={game?.status} />
                                        <InfoItem label="ESRB" value={game?.esrb_rating} />
                                        <InfoItem label="PEGI" value={game?.pegi_rating} />
                                    </div>
                                    <div id="score-tags">
                                        <div id="score" className="gray-container flex flex--small-gap">
                                            <p className="bold">{game?.score}</p>
                                            <p>{game?.users} users</p>
                                        </div>
                                        <div id="genre">
                                            <h2>Genres</h2>
                                            <div className="genre-container">
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
                        <div id="primary-right" className="padding-left--md row-gap row-gap--md">
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
                        <div id="related" className="divider divider--vertical padding-right--md">
                            <h2>Related Games</h2>
                            <div className="layout-grid-2">
                                <div id="previous" className="row-gap row-gap--xs divider divider--vertical padding-right--md">
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
                        <div id="characters" className="padding-left--md">
                            <h2>characters</h2>
                            <div className="row-gap row-gap--md">
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
        </React.Fragment>
    )
}