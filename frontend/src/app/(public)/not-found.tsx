'use client';

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import "@/styles/public/pages/misc.scss";

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
                            Oops! Page Not Found
                        </h2>
                        <p>This wasn't part of Yuuka's calculations! Hopefuly we can figure it out before the rest of Seminar shows up!</p>
                        <Button variant="contained" onClick={() => router.push('/')}>Homepage</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}