import Link from "next/link"

export default function RelationCard(
    {
        name, relation, link, imageLink
    } : {
        name: string,
        relation: string,
        link?: string,
        imageLink: string
    }
) {
    if (!link) {
        return (
            <div className="relation-card">
                <img 
                    src={imageLink}
                    alt={name} 
                    className="image media-image" 
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/global/404-resource.jpg'
                    }} 
                />
                <div className="text">
                    <p className="text__type">{relation}</p>
                    <p className="text__name">{name}</p>
                </div>
            </div>
    )
    } else {
        return (
            <div className="relation-card">
                <Link href={link}>
                    <img 
                        src={imageLink}
                        alt={name} 
                        className="image media-image" 
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/global/404-resource.jpg'
                        }} 
                    />
                </Link>
                <div className="text">
                    <p className="text__type">{relation}</p>
                    <Link href={link}>
                        <p className="text__name">{name}</p>
                    </Link>
                </div>
            </div>
        )
    }
}