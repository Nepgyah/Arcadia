'use client';

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
                <div className="media-card">
                    <Link href={clickLink}>
                    <img 
                        className="media-card__image animation__hover-grow box-shadow border-radius-sm" 
                        src={imageLink}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/global/404-resource.jpg'
                        }} 
                    />
                    </Link>
                    <Link href={clickLink} className="media-card__title media-card__title--hoverable">{title}</Link>
                </div>
        )
    } else {
        return (
            <div className="media-card">
                <img 
                    className="media-card__image" 
                    src={imageLink}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/global/404-resource.jpg'
                    }} 
                />
                <p className="media-card__title">{title}</p>
            </div>
        )
    }
}