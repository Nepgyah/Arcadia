
import '@/styles/public/pages/apps/todokeru.scss';
import { Button } from '@mui/material';

export default function Todokeru() {
    return (
        <div id="page-apps-todokeru">

            <section id="hero" className="hero">
                <img id='ribbon' className='hero__bg-element' src="/website/images/apps/todokeru/hero/ribbon.png" alt="Ribbon" />
                <div className="hero__wrapper">
                    <div id="hero-main" className='shadow-box'>
                        <div className="hero__text hero__text--white">
                            <p className='japanese'>アケーディアーくみたてる</p>
                            <h1>From Pixels <br />To People</h1>
                            <p className='main-text'>Go live, drop a video, or be on the other end liking and commentating. Tokoderu brings fans, friend and creators closer together.</p>
                        </div>
                        <div id="hero-images">
                            <img id='ai-hoshino' src="/website/images/apps/todokeru/hero/ai-hoshino.png" alt="Ai Hoshino" />
                            <img id='toyama-kasumi' src="/website/images/apps/todokeru/hero/toyama-kasumi.png" alt="Toyama Kasumi" />
                            <img id='sakurako' src="/website/images/apps/todokeru/hero/sakurako.png" alt="" />
                        </div>
                    </div>
                    <div id="content-creators">
                        <div className="cc-box shadow-box">
                            <div className='cc-box__text'>
                                <p>Saba</p>
                                <a href="https://www.youtube.com/@SamekoSaba" target='_blank'>
                                    <Button variant='outlined' color='white'>
                                        Watch Now
                                    </Button>
                                </a>
                            </div>
                            <img className='cc-box__image' src="/website/images/apps/todokeru/hero/saba.png" alt="Saba" />
                        </div>
                        <div className="cc-box shadow-box">
                            <div className='cc-box__text'>
                                <p>Yuuki <br />Sakuna</p>
                                <a href="https://www.youtube.com/@結城さくな" target='_blank'>
                                    <Button variant='outlined' color='white'>
                                        Watch Now
                                    </Button>
                                </a>
                            </div>
                            <img className='cc-box__image' src="/website/images/apps/todokeru/hero/yuuki-sakuna.png" alt="Yuuki Sakuna" />
                        </div>
                        <div className="cc-box shadow-box">
                            <div className='cc-box__text'>
                                <p>Guinafen</p>
                                <a href="https://www.youtube.com/watch?v=U7xKaEoGVpE" target='_blank'>
                                    <Button variant='outlined' color='white'>
                                        Watch Now
                                    </Button>
                                </a>
                            </div>
                            <img className='cc-box__image' src="/website/images/apps/todokeru/hero/guinaifen.png" alt="Guinaifen" />
                        </div>
                        <div className="cc-box shadow-box">
                            <div className='cc-box__text'>
                                <p>Hyacine</p>
                                <a href="https://www.youtube.com/watch?v=GhJOJxHZ20E" target='_blank'>
                                    <Button variant='outlined' color='white'>
                                        Watch Now
                                    </Button>
                                </a>
                            </div>
                            <img className='cc-box__image' src="/website/images/apps/todokeru/hero/hyacine.jpg" alt="Hyacine" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}