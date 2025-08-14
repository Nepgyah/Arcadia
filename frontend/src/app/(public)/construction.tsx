'use client';

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import "@/styles/public/pages/misc.scss";

export default function PageConstruction() {

    const router = useRouter();

    return (
        <div id="page-construction">
            <section className="section">
                <img className="section__bg-element" id="minori" src="/website/images/construction.webp" alt="Yasumori Minori" />
                <div className="section__bg-element" id="angled"></div>
                <div className="section__wrapper">
                    <div className="section-main section-main--white">
                        <h2 className="section-main__main-title">
                            Oops! This Page Is Under Construction
                        </h2>
                        <p>Your browser has summoned this page from another world! But it seems like the summon ritual is incomplete. Please check back later!</p>
                        <Button variant="contained" onClick={() => router.push('/')}>Homepage</Button>
                    </div>
                    <div></div>
                </div>
            </section>
        </div>
    )
}