import Link from "next/link"

export default function EntryCard(
    { app, title, imageLink, clickLink }
    : 
    {
        app: string,
        title: string,
        imageLink?: string,
        clickLink?: string
    }
) {
    if (clickLink) {
        return (
            <Link href={clickLink}>
                <div className="entry-card">
                    <img className="entry-card__image" src={imageLink ? imageLink : '/global/404-resource.jpg'} />
                    <p className="entry-card__title">{title}</p>
                </div>
            </Link>
        )
    } else {
        return (
            <div className="entry-card">
                <img className="entry-card__image" src={imageLink ? imageLink : '/global/404-resource.jpg'} />
                <p className="entry-card__title">{title}</p>
            </div>
        )
    }
}