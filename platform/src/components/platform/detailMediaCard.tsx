import { App } from "@/types/shared";
import Link from "next/link";

import '@/styles/platform/components/detailMediaCard.scss';

export default function DetailMediaCard (
    { app, media, link, status } : 
    {
        app: App,
        media: any,
        link: string,
        status?: string
    }
) {
    return (
        <div className="detail-card">
            <div className={`detail-card__title align-content align-content--center clr-${app}-base`}>
                <Link href={link} className="clickable">
                    {media.title}
                </Link>
            </div>
            <div className="detail-card__stats">
                <div className="score">Score: {media.score}</div>
                <div className="users">Users: {media.users}</div>
                <div className="status">Status: {status ? status : 'N/A'}</div>
            </div>
            <div className="detail-card__main">
                <img className="image" src={`/storage/${app}/${media.id}.jpg`} alt={media.title} />
                <div className="summary">
                    {media.summary}
                </div>
            </div>
            <div className="detail-card__misc">
                <div>Franchise: {media.franchise ? media.franchise.name : 'N/A'}</div>
            </div>
        </div>
    )
}