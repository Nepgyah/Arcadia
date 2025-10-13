import { social } from '@/types/franchise';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

type MediaType = 'website' | 'twitter' | 'instagram' | 'youtube' | 'reddit';

export default function SocialMediaCard (
    {
        type, social
    } : {
        type: MediaType,
        social: social
    }
) {
    const getSocialIcon = (type: MediaType) => {
        switch(type) {
            case 'website':
                return <LanguageIcon />
            case 'youtube':
                return <YouTubeIcon  className='youtube-icon'/>
            case 'twitter':
                return <TwitterIcon className='twitter-icon'/>
            case 'reddit':
                return <RedditIcon className='reddit-icon'/>
            case 'instagram':
                return <InstagramIcon className='instagram-icon'/>
        }
    }
    return (
        <div className={`social-media-card social-media-card--${type} bg-platform-dark border-radius-sm box-shadow`}>
            <div className='social-media-card__icon center-both'>{getSocialIcon(type)}</div>
            <Link href={social.url} target='_blank' className='txt-xs'>{social.handle}</Link>
        </div>
    )
}