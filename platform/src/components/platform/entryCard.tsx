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
                <div className="entry-card">
                    <Link href={clickLink}>
                    <img 
                        className="entry-card__image" 
                        src={imageLink}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/global/404-resource.jpg'
                        }} 
                    />
                    </Link>
                    <Link href={clickLink} className="entry-card__title entry-card__title--hoverable">{title}</Link>
                </div>
        )
    } else {
        return (
            <div className="entry-card">
                <img 
                    className="entry-card__image" 
                    src={imageLink}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/global/404-resource.jpg'
                    }} 
                />
                <p className="entry-card__title">{title}</p>
            </div>
        )
    }
}