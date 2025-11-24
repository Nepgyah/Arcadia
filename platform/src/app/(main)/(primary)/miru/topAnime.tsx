import EntryCard from "@/components/entryCard";
import { Anime } from "@/types/miru";

export default async function TopAnimeCards(
    { animePromise } : { animePromise: Promise<Anime[]>}
) {
    const anime = await animePromise

    return (
        <div className="flex-col flex-col--gap-sm">
            {
                anime.map((anime: Anime, key: number) => (
                    <EntryCard 
                        key={anime.id} 
                        app="miru" 
                        title={anime.title} 
                        clickLink={`/miru/anime/${anime.id}/${anime.slug}`} 
                        imageLink={`/storage/miru/${anime.id}.jpg`}
                    />
                ))
            }
    </div>
    )
}