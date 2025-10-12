import { App } from "@/types/shared";
import Link from "next/link";

export default function ArcHeader(
    {
        title, link, linkText
    } : {
        title: string,
        link?: string,
        linkText?: string
    }
) {
    return (
        <div className="arc-header">
            <div>
                <div className='box'></div>
                <h2>{title}</h2>
            </div>
            {
                link && <Link href={link}>{linkText}</Link>
            }
        </div>
    )
}