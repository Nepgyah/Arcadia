import "@/styles/public/pages/apps/yomu.scss"
import Image from "next/image"
import Button from '@mui/material/Button'

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
                    <div className="center-content text-container">
                        <div className="hero__text">
                            <p className="japanese">アケーディアーみる</p>
                            <h1>Read, Track and Discover One Page At a Time</h1>
                            <p className="main-text">Discover, manage and read mangas, light novels and manwhas and more with Arcadia Miru. Yomu is the place for all the readable otaku material.</p>
                            <Button variant="contained" color="primary">
                                Find Your Next Story
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}