'use client';

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import "@/styles/public/pages/not-found.scss";

export default function PublicNotFound() {

    const router = useRouter();

    return (
        <div id="page-not-found">
            
            <section className="section">
                <img className="section__bg-element" id="yuuka" src="/website/images/404.jpg" alt="My Wife" />
                <div className="section__bg-element" id="angled"></div>
                <div className="section__wrapper">
                    <div></div>
                    <div className="section-main section-main--white">
                        <h2 className="section-main__main-title">
                            Oops! This Page Is Under Construction
                        </h2>
                        <p>This page is still under development. Stay tuned for the next episode! Next time on Arcadia the Animation!</p>
                        <Button variant="contained" onClick={() => router.push('/')}>Homepage</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}