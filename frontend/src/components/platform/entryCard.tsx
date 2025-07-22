export default function EntryCard(
    { app, title, imageLink }
    : 
    {
        app: string,
        title: string,
        imageLink?: string
    }
) {
    return (
        <div className="entry-card">
            {
                imageLink ?
                    <img className="entry-card__image" src={imageLink} />
                :
                    <img className="entry-card__image" src='/global/404-resource.jpg' alt="Resource not found" />
            }
            <p className="entry-card__title">{title}</p>
        </div>
    )
}