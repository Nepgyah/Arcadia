import Link from "next/link";
import HealthCheck from "./healthCheck";

import { IconButton } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {  
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__main-content">
          <div className="footer__left-col">
            <div className="summary">
              <img src="/global/logo_white.svg" alt="Arcadia Logo" />
              <p>Arcadia is a pretend platform created by a passion for web development. Thanks for stopping by!</p>
            </div>
            <HealthCheck />
          </div>
          <div className="footer__mid-col">
            <div>
              <h4><span>Primary</span> Apps</h4>
              <ul>
                <li><Link href='/apps/miru'>Miru</Link></li>
                <li><Link href='/apps/yomu'>Yomu</Link></li>
                <li><Link href='/apps/asobu'>Asobu</Link></li>
                <li><Link href='/apps/kau'>Kau</Link></li>
                <li><Link href='/apps/tsunagu'>Tsunagu</Link></li>
              </ul>
            </div>
            <div>
              <h4><span>Secondary</span>  Apps</h4>
              <ul>
                <li><Link href='/apps/iku'>Iku</Link></li>
                <li><Link href='/apps/hiku'>Hiku</Link></li>
                <li><Link href='/apps/shiru'>Shiru</Link></li>
                <li><Link href='/apps/kumitateru'>Kumitateru</Link></li>
                <li><Link href='/apps/kiku'>Kiku</Link></li>
              </ul>
            </div>
            <div>
              <h4><span>D2X</span></h4>
              <ul>
                <li><Link href='/d2x/about-us'>About Us</Link></li>
                <li><Link href='/d2x/teaem'>Team</Link></li>
                <li><Link href='/d2x/careers'>Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4><span>Resource</span></h4>
              <ul>
                <li><Link href='/resource/case-study'>Case Studies</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer__right-col">
            <div className="contact">
              <h4>Socials</h4>
              <div className="socials">
                <IconButton target="_blank" href="https://www.youtube.com/@teamd2xgaming516" size="large">
                  <YouTubeIcon fontSize="inherit"/>
                </IconButton>
                <IconButton target='_blank' href="https://github.com/Nepgyah/Arcadia" size="large">
                  <GitHubIcon fontSize="inherit"/>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright">
          <p>Arcadia is a Team Double Dragon Product</p>
        </div>
      </div>
    </footer>
  );
}