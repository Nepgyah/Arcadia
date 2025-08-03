import "@/styles/public/pages/apps/yomu.scss"
import Image from "next/image"
import Button from '@mui/material/Button'
import Link from "next/link"

export default function Yomu() {

    return (
        <div id="page-apps-yomu">
            <section id="hero" className="hero">
                <img
                    id="left-books"
                    className="hero__bg-element desktop-only" 
                    src="/website/images/apps/yomu/hero/left-side-books.png" 
                    alt="" 
                />
                <img
                    id="right-books"
                    className="hero__bg-element desktop-only" 
                    src="/website/images/apps/yomu/hero/right-side-books.png" 
                    alt="" 
                />
                <img
                    className="hero__bg-image" 
                    src="/website/images/apps/yomu/hero/bg.png" 
                    alt="" 
                />
                <div className="hero__wrapper hero__wrapper--two-column">
                    <div className="hero-image">
                        <img src="/website/images/apps/yomu/hero/manga-panels.png" alt="manga-panels" />
                    </div>
                    <div className="align-content align-content--center-vertical">
                        <div className="hero__text">
                            <p className="japanese">アケーディアーよる</p>
                            <h1>Read, Track and Discover One Page At a Time</h1>
                            <p className="main-text">Discover, manage and read mangas, light novels and manwhas and more. Arcadia Yomu is your home for all the readable otaku material.</p>
                            <Link href="/platform/yomu">
                                <Button variant="contained" color="primary">
                                    Find Your Next Story
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}