'use client';

import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { Anime } from "@/util/types/miru";
import InfoItem from "@/components/platform/infoItem";
import { Character } from "@/util/types/shared";
import CharacterAvatar from "@/components/platform/characterAvatar";
import WIP from "@/components/platform/wip";
import RelationCard from "@/components/platform/relationCard";
import TagChip from "@/components/platform/chip";

export default function AnimeDetails() {
    const params = useParams();
    const [anime, setAnime] = useState<Anime>()

    useEffect(() => {
        apiGET<Anime>(`miru/anime/${params.id}/`)
        .then((res) => {
            setAnime(res)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Anime</Typography>
                <Typography>{anime?.title}</Typography>
            </Breadcrumbs>
            <div className="media-detail page-content page-content--two-col">
                <div id="left-column" className="page-content__left-column left-column">
                    <img 
                        id="image" 
                        className="media-image"
                        src={`/storage/miru/${anime?.id}.jpg`} 
                        alt={anime?.title}
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
                <div id="right-column" className="page-content__right-column row-gap row-gap--md">
                    <div id="primary">
                        <div id="overview" className="divider divider--vertical padding-right--md row-gap row-gap--md">
                            <div id="at-a-glance">
                                <div className="row-gap row-gap--md">
                                    <div id="quick-stats" className="gray-container flex flex--small-gap">
                                        <InfoItem label="Season" value={anime ? anime.season ? anime.season : 'N/A' : 'Not announced'} />
                                        <InfoItem label="Type" value={anime?.type} />
                                        <InfoItem label="Episodes" value={'Added later'} />
                                    </div>
                                    <div id="metrics">
                                        <div id="arcadia-score" className="gray-container flex flex--small-gap">
                                            <p className="bold">{anime?.score}</p>
                                            <p>{anime?.users} users</p>
                                        </div>
                                        <div id="tags">
                                            <h2>Genre</h2>
                                            <div>
                                                {
                                                    anime?.genres.length === 0 ?
                                                        <p>No genre tags added</p>
                                                    :
                                                        anime?.genres.map((genre: any, index: number) => (
                                                            <TagChip key={index} value={genre.name} app="miru"/>
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
                                <p>{anime?.summary}</p>
                            </div>
                        </div>
                        <div id="primary-right" className="misc padding-left--md row-gap row-gap--md">
                            <div>
                                <h2>Details</h2>
                                <InfoItem label="Status" value={anime?.status} />
                                <InfoItem label="Start Date" value={anime?.airing_start_date} />
                                <InfoItem label="End Date" value={anime?.airing_end_date} />
                                <InfoItem label="Rating" value={anime?.rating} />
                            </div>
                            <div>
                                <h2>Production</h2>
                                <InfoItem label="Studio" value={anime?.studio} />
                            </div>
                        </div>
                    </div>
                    <div id="secondary">
                        <div id="relations" className="divider divider--vertical padding-right--md">
                            <h2>Related Anime</h2>
                            <div>
                                <div id="previous" className="row-gap row-gap--xs">
                                    {
                                        anime?.previous_anime.length === 0 ?
                                        <p>No previous anime</p>
                                        :
                                        anime?.previous_anime.map((anime: any, index: number ) => (
                                            <RelationCard 
                                                key={index}
                                                name={anime.name} 
                                                relation={anime.relation} 
                                                link={`/platform/miru/anime/${anime.id}/${anime.slug}`}
                                                imageLink={`/storage/miru/${anime.id}.jpg`}
                                            />
                                        ))
                                    }
                                </div>
                                <div id="next" className="row-gap row-gap--xs">
                                    {
                                        anime?.next_anime.length === 0 ?
                                            <p>No next anime</p>
                                        :
                                            anime?.next_anime.map((anime: any, index: number ) => (
                                                <RelationCard 
                                                    key={index}
                                                    name={anime.name} 
                                                    relation={anime.relation} 
                                                    link={`/platform/miru/anime/${anime.id}/${anime.slug}`}
                                                    imageLink={`/storage/miru/${anime.id}.jpg`}
                                                />
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div id="characters">
                            <h2>Characters</h2>
                            <div className="row-gap row-gap--md">
                                {
                                    anime?.characters &&
                                    anime?.characters.map((character: Character, index: number) => (
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