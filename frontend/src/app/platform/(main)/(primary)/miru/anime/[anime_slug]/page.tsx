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

export default function AnimeDetails() {
    const params = useParams();
    const [anime, setAnime] = useState<Anime>()

    useEffect(() => {
        apiGET<Anime>(`miru/anime/${params.anime_slug}/`)
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
            <div id="page-miru-anime-detail" className="page-content page-content--two-col">
                <div className="page-content__left-column">
                    <img id="image" src="/global/404-resource.jpg" alt="" />
                    <div>
                        <h2 className="app-font--miru border-bottom">Quick Access</h2>
                        <WIP />
                    </div>
                    <div>
                        <h2 className="app-font--miru border-bottom">Socials</h2>
                        <WIP />
                    </div>
                </div>
                <div className="page-content__right-column row-gap row-gap--md">
                    <div id="primary">
                        <div id="primary-left" className="divider divider--vertical padding-right--md row-gap row-gap--md">
                            <div id="overview">
                                <div id="quick-stats" className="row-gap row-gap--md">
                                    <div className="gray-container flex flex--small-gap">
                                        <InfoItem label="Season" value={anime?.season.season} />
                                        <InfoItem label="Type" value={anime?.type} />
                                        <InfoItem label="Episodes" value={'Added later'} />
                                    </div>
                                    <div id="score-tags">
                                        <div id="score" className="gray-container flex flex--small-gap">
                                            <p className="font--xl font--bold">{anime?.score}</p>
                                            <p>{anime?.users} users</p>
                                        </div>
                                        <div id="genre">
                                            <h2 className="app-font--miru border-bottom">Genre</h2>
                                            <div className="genre-container">
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
                                    <h2 className="app-font--miru border-bottom">Promo Video</h2>
                                    <WIP />
                                </div>
                            </div>
                            <div id="summary">
                                <h2 className="app-font--miru border-bottom">Summary</h2>
                                <p>{anime?.summary}</p>
                            </div>
                        </div>
                        <div id="primary-right" className="padding-left--md row-gap row-gap--md">
                            <div>
                                <h2 className="app-font--miru border-bottom">Details</h2>
                                <InfoItem label="Status" value={anime?.status} />
                                <InfoItem label="Start Date" value={anime?.airing_start_date} />
                                <InfoItem label="End Date" value={anime?.airing_end_date} />
                                <InfoItem label="Rating" value={anime?.rating} />
                            </div>
                            <div>
                                <h2 className="app-font--miru border-bottom">Production</h2>
                                <InfoItem label="Studio" value={anime?.studio} />
                            </div>
                        </div>
                    </div>
                    <div id="secondary">
                        <div id="related" className="divider divider--vertical padding-right--md">
                            <h2 className="app-font--miru border-bottom">Related Anime</h2>
                            <div className="flex-grid flex-grid--2">
                                <div id="previous" className="row-gap row-gap--xs divider divider--vertical padding-right--md">
                                    {
                                        anime?.previous_anime.length === 0 ?
                                        <p>No previous anime</p>
                                        :
                                        anime?.previous_anime.map((anime: any, index: number ) => (
                                            <RelationCard 
                                                key={index}
                                                name={anime.name} 
                                                relation={anime.relation} 
                                                link={`/platform/miru/anime/${anime.slug}`}
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
                                                    link={`/platform/miru/anime/${anime.slug}`}
                                                />
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div id="characters" className="padding-left--md">
                            <h2 className="app-font--miru border-bottom">characters</h2>
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