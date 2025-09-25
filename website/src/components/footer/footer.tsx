import { IconButton } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__main">
                    <div className="overview">
                        <div className="summary">
                            <img src="/logo/logo_white.svg" alt="Arcadia Logo" />
                            <p>Arcadia is a pretend platform created by a passion for web development. Thanks for stopping by!</p>
                        </div>
                        <div className="health-check"></div>
                    </div>
                    <div className="links"></div>
                    <div className="socials">
                        <h4>Socials</h4>
                        <div className="socials-container">
                            <IconButton target="_blank" href="https://www.youtube.com/@teamd2xgaming516" size="large">
                                <YouTubeIcon fontSize="large"/>
                            </IconButton>
                            <IconButton target='_blank' href="https://github.com/Nepgyah/Arcadia" size="large">
                                <GitHubIcon fontSize="large"/>
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p>Arcadia is a Team Double Dragon Product</p>
                </div>
            </div>
        </footer>
    )
}