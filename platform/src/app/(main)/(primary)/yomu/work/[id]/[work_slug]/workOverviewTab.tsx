
import { Character } from "@/types/shared";
import React, { Suspense, use } from "react";

import { Chip, Skeleton } from "@mui/material";

import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";
import MediaFlowCard from "@/components/mediaFlowCard";
import { MediaCharacterListSkeleton } from "@/components/media/characterList";
import ArcChip from "@/components/arcChip";
import { Franchise } from "@/types/franchise";
import FranchiseCard from "@/components/media/franchiseCard";
import { Work } from "@/types/yomu";


export default function WorkOverviewTab(
    {
        workPromise,
        characterPromise,
        franchisePromise,
    } : {
        workPromise: Promise<Work>,
        characterPromise: Promise<Character[]>,
        franchisePromise: Promise<Franchise>,
    }
) {

    return (
        <div className="flex-row flex-row--gap-md">
            <div className="grid grid--2-col">
                <div id="genres">
                    <ArcHeader title="Genres" />
                    <Suspense fallback={
                        <div className="flex-col flex-col--gap-sm">
                            {Array.from({ length: 5}).map((_, i: number) => (
                                <Skeleton key={i} height={'54px'} width={'90px'} variant="rectangular" animation={'wave'}/>
                            ))}
                        </div>
                    }>
                        <Genres workPromise={workPromise} />
                    </Suspense>
                </div>
                <div id="franchise">
                    <ArcHeader title="Franchise" />
                    <FranchiseCard franchisePromise={franchisePromise}/>
                </div>
            </div>
            <div id="characters">
                <ArcHeader title="Characters" />
                <Suspense fallback={ <MediaCharacterListSkeleton />}>
                    <Characters characterPromise={characterPromise} />
                </Suspense>
            </div>
            <div id="anime-flow">
                <ArcHeader title="Work Flow" />
                <div className="grid grid--2-col">
                    <Suspense fallback={
                        <>
                            <Skeleton animation={'wave'} height={'200px'} width={'100%'}/>
                            <Skeleton animation={'wave'} height={'200px'} width={'100%'}/>
                        </>
                    }>
                        <Flow workPromise={workPromise} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

function Characters(
    {
        characterPromise
    } : {
        characterPromise: Promise<Character[]>
    }
) {
    const characters = use(characterPromise);

    return (
        <div id="characters-container" className="flex-col flex-col--gap-sm">
            {
                characters.slice(0,6).map((character: any, idx: number) => (
                    <CharacterCard 
                        key={idx}
                        characterId={character.character.id}
                        characterName={`${character.character.firstName} ${character.character.lastName ? character.character.lastName : ''}`}
                        characterDescription={character.role}
                        voiceActorId={character.character.playedBy?.id}
                        voiceActorName={character.character.playedBy ? `${character.character.playedBy.firstName} ${character.character.playedBy.lastName ? character.character.playedBy.lastName : ''}` : 'Unknown'}
                        voiceActorDescription='Japanese'
                    />
                ))
            }
        </div>
    )
}

function Genres(
    {
        workPromise
    } : {
        workPromise: Promise<Work>
    }
) {

    const work = use(workPromise)
    return (
        <>
        {
            work.genres.length !== 0 ?
                <div className="flex-col flex-col--gap-sm">
                    {
                        work.genres.map((genre: any, idx: number) => (
                            <ArcChip key={genre.name} label={genre.name} app="yomu"/>
                        ))
                    }
                </div>
            :
                <p>No genres added</p>
        }
        </>
    )
}

function Flow({workPromise} : {workPromise: Promise<Work>}) {
    const work = use(workPromise);

    return (
        <>
            {
                work.previousWork ?
                    <MediaFlowCard 
                        image={`/storage/miru/${work.previousWork.toWork.id}.jpg`}
                        relation="Prequel"
                        mediaName={work.previousWork.toWork.title}
                        mediaLink={`/yomu/work/${work.previousWork.toWork.id}/${work.previousWork.toWork.slug}`}              
                    />
                :
                    <p>No Prequel Work</p>
            }
            {
                work.nextWork ?
                    <MediaFlowCard 
                        image={`/storage/miru/${work.nextWork.toWork.id}.jpg`}
                        relation="Sequel"
                        mediaName={work.nextWork.toWork.title}
                        mediaLink={`/miru/anime/${work.nextWork.toWork.id}/${work.nextWork.toWork.slug}`}              
                    />
                :
                    <p>No Sequel Work</p>
            }
        </>
    )
}