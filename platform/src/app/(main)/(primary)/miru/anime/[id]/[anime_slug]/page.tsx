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
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";

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
            <div id="page-miru-detail" className="page-content">
                <div className="grid grid--feature-combo">
                    <MediaFeatureCard
                        title={anime ? anime.title : 'Anime Name'}
                        description={anime ? anime.summary : 'Summary'}
                        score={anime ? anime.score : 0.0}
                        app="miru"
                        image={`/storage/miru/${anime?.id}.jpg`}
                     />
                    <div>right</div>
                </div>
                <div className="grid grid--side-col-reverse">
                    <div className="flex-row flex-row--gap-md">
                        <div id="quick-access">
                            <ArcHeader title="Quick Access" />
                            <div className="flex-row flex-row--gap-sm">
                                <p>status</p>
                                <p>episode</p>
                                <p>rating</p>
                            </div>
                        </div>
                        <div id="socials">
                            <ArcHeader title="Socials" />
                            <div className="flex-row flex-row--gap-sm">
                                <p>status</p>
                                <p>episode</p>
                                <p>rating</p>
                            </div>
                        </div>
                        <div id="misc">
                            <ArcHeader title="Misc" />
                            <div className="flex-row flex-row--gap-sm">
                                <p>status</p>
                                <p>episode</p>
                                <p>rating</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row flex-row--gap-md">
                        <div id="characters">
                            <ArcHeader title="Characters" />
                            <div className="flex-row flex-row--gap-sm">
                                <p>status</p>
                                <p>episode</p>
                                <p>rating</p>
                            </div>
                        </div>
                        <div id="anime-flow">
                            <ArcHeader title="Anime Flow" />
                            <div className="flex-row flex-row--gap-sm">
                                <p>status</p>
                                <p>episode</p>
                                <p>rating</p>
                            </div>
                        </div>
                        <div id="themes">
                            <div className="grid grid--2-col">
                                <div>
                                    <ArcHeader title="Openings" />
                                    <div className="flex-row flex-row--gap-sm">
                                        <p>status</p>
                                        <p>episode</p>
                                        <p>rating</p>
                                    </div>
                                </div>
                                <div>
                                    <ArcHeader title="Endings" />
                                    <div className="flex-row flex-row--gap-sm">
                                        <p>status</p>
                                        <p>episode</p>
                                        <p>rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}