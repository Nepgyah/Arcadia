import '@/styles/public/pages/apps/iku.scss';
import { Button } from '@mui/material';

export default function Iku() {
    return (
        <div id="page-apps-iku">
            
            <section id='hero' className='hero'>
                <div className='hero__wrapper hero__wrapper--two-column'>
                    <div className='center-vertically'>
                        <div className='hero__text hero__text--white'>
                            <p className='japanese'>アケーディアーいく</p>
                            <h1>Make Every Meetup A Adventure</h1>
                            <p className='main-text'>Never miss a con, collab, or watch party. Track, remind, and rally your crew with Iku: the ultimate event planner built for fans who live for the next big moment.</p>
                            <Button variant='contained' color='primary'>Explore Today</Button>
                        </div>
                    </div>
                    <div className='hero-image'>
                        <div className='left-col'>
                            <img className='arcadia-image' id='elf-bar' src="/website/images/apps/iku/hero/elf-bar.jpeg" alt="Hanging out at a bar" />
                            <img id='expo-logo' className='event-logo' src="/website/images/apps/iku/hero/anime-expo-and-comiket.png" alt="Anime expo and Comiket" />
                            <img className='arcadia-image' id='elf-bar' src="/website/images/apps/iku/hero/hanging-out.webp" alt="Bocchi jumping picture" />
                        </div>
                        <div className='right-col'>
                            <img className='event-logo' src="/website/images/apps/iku/hero/anime-midwest-and-acen.png" alt="Anime Midwest and Anime Central" />
                            <img className='arcadia-image' src="/website/images/apps/iku/hero/camping.webp" alt="Anime camping" />
                            <img className='event-logo' src="/website/images/apps/iku/hero/anime-matsuri.png" alt="Anime matsuri" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}