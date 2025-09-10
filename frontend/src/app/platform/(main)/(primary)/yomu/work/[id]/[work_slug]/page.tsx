'use client';

import WIP from "@/components/platform/wip";
import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

import InfoItem from "@/components/platform/infoItem";
import TagChip from "@/components/platform/chip";
import { Character } from "@/util/types/shared";
import CharacterAvatar from "@/components/platform/characterAvatar";

export default function WorkDetails() {
    const params = useParams();
    const [work, setWork] = useState<any>();

    useEffect(() => {
        apiGET<any>(`yomu/work/${params.id}/`)
        .then((res) => {
            setWork(res)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Yomu</Typography>
                <Typography>Work</Typography>
                <Typography>{work?.title}</Typography>
            </Breadcrumbs>
            <div className="media-detail page-content page-content--two-col">
                <div id="left-column" className="page-content__left-column left-column">
                    <img 
                        id="image" 
                        className="media-image"
                        src={`/storage/yomu/${work?.id}.jpg`} 
                        alt={work?.title}
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
                                <div id="quick-stats" className="row-gap row-gap--md">
                                    <div className="gray-container flex flex--small-gap">
                                        <InfoItem label="Type" value={work?.type} />
                                        <InfoItem label="Volumes" value={work?.total_volumes} />
                                        <InfoItem label="Chapters" value={work?.total_chapters} />
                                    </div>
                                    <div id="metrics">
                                        <div id="arcadia-score" className="gray-container flex flex--small-gap">
                                            <p className="bold clr-yomu-base txt-xxl">{work?.score}</p>
                                            <p>{work?.users} users</p>
                                        </div>
                                        <div id="tags">
                                            <h2>Genre</h2>
                                            <div>
                                                {
                                                    work?.genres.length === 0 ?
                                                        <p>No genre tags added</p>
                                                    :
                                                        work?.genres.map((genre: any, index: number) => (
                                                            <TagChip 
                                                                key={index} 
                                                                value={genre.name} 
                                                                app="yomu"
                                                                whiteText={true}
                                                            />
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
                                <p>{work?.summary}</p>
                            </div>
                        </div>
                        <div id="primary-right" className="padding-left--md row-gap row-gap--md">
                            <div>
                                <h2>Details</h2>
                                <InfoItem label="Status" value={work?.status} />
                                <InfoItem label="Publishing Start" value={work?.airing_start_date ? work.airing_start_date : 'N/A' } />
                                <InfoItem label="Publishing End" value={work?.airing_end_date ? work.airing_end_date : 'N/A'} />
                            </div>
                            <div>
                                <h2>Production</h2>
                                <InfoItem label="Authors" value={
                                    work?.authors.map((author: any) => (
                                        author.name
                                    ))
                                } />
                            </div>
                        </div>
                    </div>
                    <div id="secondary">
                        <div id="relations" className="divider divider--vertical padding-right--md">
                            <h2>Related Manga</h2>
                            <div>
                                <div id="previous" className="row-gap row-gap--xs">
                                    {/* {
                                        anime?.previous_anime.length === 0 ?
                                        <p>No previous anime</p>
                                        :
                                        anime?.previous_anime.map((anime: any, index: number ) => (
                                            <RelationCard 
                                                key={index}
                                                name={anime.name} 
                                                relation={anime.relation} 
                                                link={`/platform/miru/anime/${anime.slug}`}
                                                imageLink={`/storage/miru/${anime.slug}.jpg`}
                                            />
                                        ))
                                    } */}
                                </div>
                                <div id="next" className="row-gap row-gap--xs">
                                    {/* {
                                        anime?.next_anime.length === 0 ?
                                            <p>No next anime</p>
                                        :
                                            anime?.next_anime.map((anime: any, index: number ) => (
                                                <RelationCard 
                                                    key={index}
                                                    name={anime.name} 
                                                    relation={anime.relation} 
                                                    link={`/platform/miru/anime/${anime.slug}`}
                                                    imageLink={`/storage/miru/${anime.slug}.jpg`}
                                                />
                                            ))
                                    } */}
                                </div>
                            </div>
                        </div>
                        <div id="characters" className="padding-left--md">
                            <h2>Characters</h2>
                            <div className="row-gap row-gap--md">
                                {
                                    work?.characters &&
                                    work?.characters.map((character: Character, index: number) => (
                                        <CharacterAvatar key={index} character={character} app='yomu' />
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