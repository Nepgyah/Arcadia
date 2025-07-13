import Button from '@mui/material/Button';

import "@/styles/public/pages/apps/kau.scss"
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
export default function Kau() {

    return (
        <div id="page-apps-kau">
            <section id="hero" className="hero">
                <img id='hero-lines-1' className='hero__bg-element desktop-only' src="/website/images/apps/kau/hero/hero-lines.svg" alt="" />
                <img id='hero-lines-2' className='hero__bg-element desktop-only' src="/website/images/apps/kau/hero/hero-lines-2.svg" alt="" />
                <div className="hero__wrapper">
                    <img id='marin' className='desktop-only' src="/website/images/apps/kau/hero/marin.png" alt="Marin Kitagawa" />
                    <div className="hero__text">
                        <div className="mobile-only">
                            <p className="japanese">アケーディアーかう</p>
                            <h1>Cosplay, Streetwear and Otaku Goods</h1>
                        </div>
                        <div className="desktop-only">
                            <p className="japanese">アケーディアーかう</p>
                            <h1>Cosplay <br />and Otaku</h1>
                        </div>
                    </div>
                    <div className="cta">
                        <img className='desktop-only' src="/website/images/apps/kau/hero/signature.png" alt="" />
                        <div className='cta-container'>
                            <p>Shop the latest anime merch, trendy apparel, and exclusive cosplay pieces.</p>
                            <Button variant="contained" color="primary">
                            Shop Now
                            </Button>
                        </div>
                    </div>
                    <div className='desktop-only header-part-two'>
                        <p>Streetwear</p>
                        <p>Goods</p>
                    </div>
                    <div className='spotlight'>
                        <div className='image'>
                            <img src="/website/images/apps/kau/hero/marin-smol-1.png" alt="" />
                        </div>
                        <div className='image'>
                            <img src="/website/images/apps/kau/hero/marin-smol-2.png" alt="" />
                        </div>
                        <div className='image'>
                            <img src="/website/images/apps/kau/hero/marin-smol-3.png" alt="" />
                        </div>
                        <div className='socials'>
                            <div className='social-links'>
                                <IconButton size='medium'>
                                  <InstagramIcon fontSize='inherit' />
                                </IconButton>
                                <IconButton size='medium'>
                                  <YouTubeIcon fontSize='inherit' />
                                </IconButton>
                                <IconButton size='medium'>
                                  <PinterestIcon fontSize='inherit' />
                                </IconButton>
                            </div>
                            <p>@KitagawaMarin__</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}