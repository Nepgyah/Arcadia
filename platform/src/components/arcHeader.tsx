import Link from "next/link";

export default function ArcHeader(
    {
        title, link, linkText
    } : {
        title: string,
        link?: string,
        linkText: string
    }
) {
    return (
        <div className="arc-header">
            <h2>{title}</h2>
            {
                link && <Link href={link}>{linkText}</Link>
            }
        </div>
    )
}