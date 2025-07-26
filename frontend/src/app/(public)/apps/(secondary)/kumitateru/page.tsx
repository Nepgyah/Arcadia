import '@/styles/public/pages/apps/kumitateru.scss';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Kumitateru() {
    return (
        <div id="page-apps-kumitateru">
            
            <section id='hero' className='hero'>
                <img className='hero__bg-image' src="/website/images/apps/kumitateru/hero/circuit-board.png" alt="Fadded circuit board" />
                <div className='hero__wrapper'>
                    <div className='left-col'>
                        <img src="/website/images/apps/kumitateru/hero/gpu.png" alt="Gaming GPU" />
                    </div>
                    <div className='middle-col'>
                        <div className='top-row'>
                            <img src="/website/images/apps/kumitateru/hero/ram.png" alt="Set of pc ram" />
                            <img id='cpu' src="/website/images/apps/kumitateru/hero/cpu.png" alt="CPU" />
                        </div>
                        <div className='hero__text'>
                            <p className='japanese'>アケーディアーくみたてる</p>
                            <h1>Build Your Battlestation</h1>
                            <p className='main-text'>From part-picking to perfect aesthetics, Kumitateru helps you design, customize, and optimize the rig of your dreams.</p>
                            <Link href='/platform/kumitateru'>
                                <Button variant='contained'>Build Your Beast Today</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='right-col'>
                        <img id='mobo' src="/website/images/apps/kumitateru/hero/mobo.png" alt="Motherboard" />
                        <img src="/website/images/apps/kumitateru/hero/case.png" alt="Computer Case" />
                    </div>
                </div>
            </section>
        </div>
    )
}