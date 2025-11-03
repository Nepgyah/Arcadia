import Link from "next/link";

type mediaType = 'song' | 'album' | 'artist';

export default function KikuCard(
    {
        number, id, title, subTitle, type, mainLink, subLink
    } : {
        number?: number,
        id: number,
        title: string,
        subTitle?: string,
        type: mediaType,
        mainLink: string,
        subLink?: string,
    }
) {
    return (
        <div className="kiku-song-card">
            { number && <p>{number}</p>}
            <Link href={mainLink} className="clickable">
                <img className="kiku-song-card__image border-radius-sm animation__hover-grow box-shadow" src={`/storage/kiku/${type}/${id}.jpg`} alt="" />
            </Link>
            <div>
                <Link href={mainLink} className="clickable">
                    <p className="kiku-song-card__title">{title}</p>
                </Link>
                {
                    subTitle &&
                        <Link href={subLink ? subLink : ''} className="clickable">
                            <p className="kiku-song-card__subtitle">{subTitle}</p>
                        </Link>
                }
            </div>
        </div>
    )
}