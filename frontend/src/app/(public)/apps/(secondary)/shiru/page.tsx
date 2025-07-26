import '@/styles/public/pages/apps/shiru.scss';
import Button from '@mui/material/Button'
import Link from 'next/link';

export default function Shiru() {
    return (
        <div id='page-apps-shiru'>
            
            <section id='hero' className='hero'>
                <div className='hero__full-wrapper'>
                    <div id='topics'>
                        <ShiruTopic topic='food' text='Food' />
                        <ShiruTopic topic='travel' text='Travel' />
                        <ShiruTopic topic='anime' text='Anime' />
                        <ShiruTopic topic='gaming' text='Gaming' />
                        <ShiruTopic topic='culture' text='Culture' />
                        <ShiruTopic topic='events' text='Events' />
                    </div>
                    <div id='hero-text' className='center-content'>
                        <img src="/website/images/apps/shiru/hero/retro-city.png" alt="Anime retro city" />
                        <div className='mask'></div>
                        <div className='blur-container hero__text'>
                            <p className='japanese'>アケーディアしる</p>
                            <h1>Stories from the Otaku-verse</h1>
                            <p className='main-text'>Discover fresh perspectives, guides, and stories from fans just like you—only on Shiru.</p>
                            <Link href='/platform/shiru'>
                                <Button variant="contained" color="primary">
                                    Discover Otaku Knowledge
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function ShiruTopic({topic, text} : {topic: string, text: string}) {
    return (
        <div className='topic'>
            <div className='arcadia-image'>
                <img src={`/website/images/apps/shiru/hero/${topic}.png`} alt={`${topic}`} />
            </div>
            <p>{text}</p>
        </div>
    )
}