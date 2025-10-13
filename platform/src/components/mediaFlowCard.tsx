import Link from "next/link";

export default function MediaFlowCard(
    {
        image,
        relation,
        mediaName,
        mediaLink,
    } : {
        image: string,
        relation: string,
        mediaName: string,
        mediaLink: string,
    }
) {
    return (
        <div className="media-flow-card">
            <Link href={mediaLink} className="animation__hover-grow">
                <img src={image} alt={mediaName} className="border-radius-sm box-shadow" />
            </Link>
            <div className="text">
                <p>{relation}</p>
                <Link href={mediaLink}>{mediaName}</Link>
            </div>
        </div>
    )
}