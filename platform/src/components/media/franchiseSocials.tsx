import { Franchise } from "@/types/franchise";
import Link from "next/link";
import { use } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function FranchiseSocials({franchisePromise} : {franchisePromise: Promise<Franchise>}) {
    const franchise = use(franchisePromise);

    return (
        <div id="socials-container" className="flex-row flex-row--gap-sm">
            {
                franchise.socials?.website && 
                    <div className={`social-media-card social-media-card--website bg-platform-dark border-radius-sm box-shadow`}>
                        <div className='social-media-card__icon center-both'>
                            <LanguageIcon />
                        </div>
                        <Link href={franchise.socials.website.url} target='_blank' className='txt-xs'>{franchise.socials.website.handle}</Link>
                    </div>
            }
            {
                franchise.socials?.youtube && 
                    <div className={`social-media-card social-media-card--youtube bg-platform-dark border-radius-sm box-shadow`}>
                        <div className='social-media-card__icon center-both'>
                            <YouTubeIcon />
                        </div>
                        <Link href={franchise.socials.youtube.url} target='_blank' className='txt-xs'>{franchise.socials.youtube.handle}</Link>
                    </div>
            }
            {
                franchise.socials?.reddit && 
                    <div className={`social-media-card social-media-card--reddit bg-platform-dark border-radius-sm box-shadow`}>
                        <div className='social-media-card__icon center-both'>
                            <RedditIcon />
                        </div>
                        <Link href={franchise.socials.reddit.url} target='_blank' className='txt-xs'>{franchise.socials.reddit.handle}</Link>
                    </div>
            }
            {
                franchise.socials?.twitter && 
                    <div className={`social-media-card social-media-card--twitter bg-platform-dark border-radius-sm box-shadow`}>
                        <div className='social-media-card__icon center-both'>
                            <TwitterIcon />
                        </div>
                        <Link href={franchise.socials.twitter.url} target='_blank' className='txt-xs'>{franchise.socials.twitter.handle}</Link>
                    </div>
            }
            {
                franchise.socials?.instagram && 
                    <div className={`social-media-card social-media-card--youtube bg-platform-dark border-radius-sm box-shadow`}>
                        <div className='social-media-card__icon center-both'>
                            <InstagramIcon />
                        </div>
                        <Link href={franchise.socials.instagram.url} target='_blank' className='txt-xs'>{franchise.socials.instagram.handle}</Link>
                    </div>
            }
        </div>
    )
}