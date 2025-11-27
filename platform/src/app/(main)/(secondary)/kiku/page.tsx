export const revalidate = 3600;

import React, { Suspense } from "react";
import { Skeleton } from "@mui/material";

import ArcHeader from "@/components/arcHeader";

import '@/styles/pages/kiku/_home.scss';
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import { fetchKikuFeatured, fetchTopAlbums, fetchTopArtists, fetchTopSongs } from "./homeQuery";
import { Featured, TopAlbums, TopArtists, TopSongs } from "./kikuHomeComponents";

export default async function KikuHome() {
    const topSongsPromise = fetchTopSongs()
    const topAlbumsPromise = fetchTopAlbums()
    const topArtistsPromise = fetchTopArtists()
    const featuredPromise = fetchKikuFeatured()

    return (
        <React.Fragment>
            <BreadcrumbSetter breadcrumbs={['Kiku', 'Home']} />
            <div id="page-kiku-home"  className="page-content">
                <div id="spotlight" className="grid">
                    <Suspense fallback={
                        <>
                            <Skeleton variant="rectangular" height={'250px'} width={'100%'} animation={'wave'} />
                            <Skeleton variant="rectangular" height={'100%'} width={'100%'} animation={'wave'} />
                        </>
                    }>
                        <Featured featuredPromise={featuredPromise} />
                    </Suspense>
                </div>
                <div id="top-kiku" className="grid grid--3-col">
                    <div>
                        <ArcHeader title='Top Songs This Month' />
                        <div className="flex-row flex-row--gap-sm row-divider">
                            <Suspense fallback={
                                Array.from({ length: 5}).map((_, i) => (
                                    <Skeleton animation={'wave'} key={i} variant="rectangular" height={'140px'} width={'100%'} />
                                ))
                            }>
                                <TopSongs topSongsPromise={topSongsPromise} />
                            </Suspense>
                        </div>
                    </div>
                    <div>
                        <ArcHeader title='Top Albums This Month' />
                        <div className="flex-row flex-row--gap-sm row-divider">
                            <Suspense fallback={
                                Array.from({ length: 5}).map((_, i) => (
                                    <Skeleton animation={'wave'} key={i} variant="rectangular" height={'140px'} width={'100%'} />
                                ))
                            }>
                                <TopAlbums topAlbumsPromise={topAlbumsPromise} />
                            </Suspense>
                        </div>
                    </div>
                    <div>
                        <ArcHeader title='Top Artists This Month' />
                        <div className="flex-row flex-row--gap-sm row-divider">
                            <Suspense fallback={
                                Array.from({ length: 5}).map((_, i) => (
                                    <Skeleton animation={'wave'} key={i} variant="rectangular" height={'140px'} width={'100%'} />
                                ))
                            }>
                                <TopArtists topArtistsPromise={topArtistsPromise} />
                            </Suspense>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
