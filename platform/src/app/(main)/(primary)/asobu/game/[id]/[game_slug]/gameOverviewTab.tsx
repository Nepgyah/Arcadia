import ArcChip from "@/components/arcChip";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";
import { MediaCharacterListSkeleton } from "@/components/media/characterList";
import FranchiseCard from "@/components/media/franchiseCard";
import MediaFlowCard from "@/components/mediaFlowCard";
import { Game } from "@/types/asobu";
import { Franchise } from "@/types/franchise";
import { Character } from "@/types/shared";
import { Skeleton } from "@mui/material";
import { Suspense, use } from "react";

export function GameOverviewTab(
    {
        gamePromise,
        characterPromise,
        franchisePromise
    } : {
        gamePromise: Promise<Game>,
        characterPromise: Promise<Character[]>,
        franchisePromise: Promise<Franchise>
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
                        <Genres gamePromise={gamePromise} />
                    </Suspense>
                </div>
                <div id="franchise">
                    <ArcHeader title="Franchise" />
                    <FranchiseCard  franchisePromise={franchisePromise}/>
                </div>
            </div>
            <div id="characters">
                <ArcHeader title="Characters" />
                <Suspense fallback={ <MediaCharacterListSkeleton />}>
                    <Characters characterPromise={characterPromise} />
                </Suspense>
            </div>
            <div id="game-flow">
                <ArcHeader title="Anime Flow" />
                <div className="grid grid--2-col">
                    <Suspense fallback={
                        <>
                            <Skeleton animation={'wave'} height={'200px'} width={'100%'}/>
                            <Skeleton animation={'wave'} height={'200px'} width={'100%'}/>
                        </>
                    }>
                        <Flow gamePromise={gamePromise} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

function Genres(
    {
        gamePromise
    } : {
        gamePromise: Promise<Game>
    }
) {

    const game = use(gamePromise)

    return (
        <>
        {
            game.genres.length !== 0 ?
                <div className="flex-col flex-col--gap-sm">
                    {
                        game.genres.map((genre: any, idx: number) => (
                            <ArcChip key={genre.name} label={genre.name} app="asobu"/>
                        ))
                    }
                </div>
            :
                <p>No genres added</p>
        }
        </>
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

function Flow(
    {
        gamePromise
    } : {
        gamePromise: Promise<any>
    }
) {
    const game = use(gamePromise)

    return (
        <>
            {
                game.previousGame ?
                    <MediaFlowCard 
                        image={`/storage/asobu/${game.previousGame.fromGame.id}.jpg`}
                        relation="Prequel"
                        mediaName={game.previousGame.fromGame.title}
                        mediaLink={`/asobu/game/${game.previousGame.fromGame.id}/${game.previousGame.fromGame.slug}`}              
                    />
                :
                    <p>No Previous Game</p>
            }
            {
                game?.nextGame ?
                    <MediaFlowCard 
                        image={`/storage/asobu/${game.nextGame.toGame.id}.jpg`}
                        relation="Sequel"
                        mediaName={game.nextGame.toGame.title}
                        mediaLink={`/asobu/game/${game.nextGame.toGame.id}/${game.nextGame.toGame.slug}`}              
                    />
                :
                    <p>No Previous Game</p>
            }
        </>
    )
}