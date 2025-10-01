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

import { Anime } from "@/types/miru";
import { Character } from "@/types/shared";
import SocialMediaLink from "@/components/platform/socialMediaLink";

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
            <div className="media-detail page-content">
                <div className="two-col-section two-col-section--uneven">
                    <div id="left-column" className="row-gap-md">
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
                            <div className="row-gap-s">
                                {
                                    anime?.franchise.socials.website && <SocialMediaLink type="website" social={anime.franchise.socials.website} />
                                }
                                {
                                    anime?.franchise.socials.twitter && <SocialMediaLink type="twitter" social={anime.franchise.socials.twitter} />
                                }
                                {
                                    anime?.franchise.socials.youtube && <SocialMediaLink type="youtube" social={anime.franchise.socials.youtube} />
                                }
                                {
                                    anime?.franchise.socials.reddit && <SocialMediaLink type="reddit" social={anime.franchise.socials.reddit} />
                                }
                                {
                                    anime?.franchise.socials.instagram && <SocialMediaLink type="instagram" social={anime.franchise.socials.instagram} />
                                }
                            </div>
                        </div>
                    </div>
                    <div id="right-column" className="page-content__right-column row-gap row-gap-md">
                        <div id="primary">
                            <div id="overview" className="vertical-divider-right p-right-md row-gap-md">
                                <div id="at-a-glance">
                                    <div>
                                        <div id="quick-stats" className="gray-container col-gap-s m-bottom-md">
                                            <InfoItem label="Season" value={anime ? anime.season ? anime.season : 'N/A' : 'Not announced'} />
                                            <InfoItem label="Type" value={anime?.type} />
                                            <InfoItem label="Episodes" value={'Added later'} />
                                        </div>
                                        <div id="metrics">
                                            <div id="arcadia-score" className="gray-container">
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
                            <div id="primary-right" className="misc p-left-md row-gap-md">
                                <div>
                                    <h2>Details</h2>
                                    <InfoItem label="Status" value={anime?.status} />
                                    <InfoItem label="Start Date" value={anime?.airing_start_date} />
                                    <InfoItem label="End Date" value={anime?.airing_end_date} />
                                </div>
                                <div>
                                    <h2>Production</h2>
                                    <InfoItem label="Studio" value={anime?.studio} />
                                </div>
                            </div>
                        </div>
                        <div id="secondary">
                            <div id="relations" className="vertical-divider-right p-right-md">
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
                                                    link={`/miru/anime/${anime.id}/${anime.slug}`}
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
                                                        link={`/miru/anime/${anime.id}/${anime.slug}`}
                                                        imageLink={`/storage/miru/${anime.id}.jpg`}
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
            </div>
        </React.Fragment>
    )
}