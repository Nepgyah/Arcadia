type app = 'miru' | 'asobu' | 'yomu'
export default function MediaFeatureCard(
    {
        title, description, score, image, app
    } : {
        title: string,
        description: string,
        score: number,
        image: string,
        app: app
    }
) {

    return (
        <div className="media-feature-card bg-platform-dark border-radius-md box-shadow">
            <div className="text p-a-sm">
                <h2 className={`media-feature-card__title clr-${app}-base`}>{title}</h2>
                <p className="media-feature-card__description txt-sm">{description}</p>
               <p className={`media-feature-card__score`}>Score: <span className={`clr-${app}-base`}>{score}</span> / 10</p>
            </div>
            <div className="media-feature-card__image">
                <div className="mask"></div>
                <img src={image} alt={title} />
            </div>
        </div>
    )
}