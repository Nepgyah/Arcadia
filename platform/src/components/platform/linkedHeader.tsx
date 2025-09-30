import Link from "next/link"

export default function LinkedHeader(
    { title, link, linkText } :
    {
        title: string,
        link: string,
        linkText: string
    }
) {
    return (
        <div className="linked-header">
            <h2 className="border-bottom-none">{title}</h2>
            <Link className="clickable" href={link}>{linkText}</Link>
        </div>
    )
}