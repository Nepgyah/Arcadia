import { social } from '@/types/franchise';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

type MediaType = 'website' | 'twitter' | 'instagram' | 'youtube' | 'reddit';

export default function SocialMediaLink(
    { type, social }:
    {
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
        <Link className="social-media-link" href={social.url} target='_blank'>
            {getSocialIcon(type)}
            <p className='clickable'>{social.handle}</p>
        </Link>
    )
}