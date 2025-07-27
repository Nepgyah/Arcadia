import Link from "next/link"

export default function RelationCard(
    {
        name, relation, link   
    } : {
        name: string,
        relation: string,
        link?: string
    }
) {
    if (!link) {
        return (
            <div className="relation-card">
                <img src='/global/404-resource.jpg' alt={name} className="image media-image" />
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
                    <img src='/global/404-resource.jpg' alt={name} className="image media-image" />
                </Link>
                <div className="text">
                    <p className="text__type">{relation}</p>
                    <p className="text__name">{name}</p>
                </div>
            </div>
        )
    }
}