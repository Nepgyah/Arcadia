import EntryCard from "@/components/entryCard";
import { Work } from "@/types/yomu";

export default async function TopWorkCards(
    { workPromise } : { workPromise: Promise<Work[]>}
) {
    const work = await workPromise

    return (
        <div className="flex-col flex-col--gap-sm">
            {
                work.map((work: Work, key: number) => (
                    <EntryCard 
                        key={work.id} 
                        app="yomu" 
                        title={work.title} 
                        clickLink={`/yomu/work/${work.id}/${work.slug}`} 
                        imageLink={`/storage/yomu/${work.id}.jpg`}
                    />
                ))
            }
    </div>
    )
}