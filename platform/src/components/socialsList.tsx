'use client';

import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

interface Social {
    url: string,
    handle: string,
}

interface socials {
    website: Social | undefined,
    twitter: Social | undefined,
    instagram: Social | undefined,
    youtube: Social | undefined,
    reddit: Social | undefined,
}

export default function SocialsList(
    {
        socials
    } : {
        socials : any
    }
) {

    return (
        <div id="socials-container" className="flex-row flex-row--gap-sm">
            {
                socials?.website &&
                <SocialMediaCard 
                    type="website"
                    social={socials.website}
                />
            }
            {
                socials?.youtube &&
                <SocialMediaCard 
                    type="youtube"
                    social={socials.youtube}
                />
            }
            {
                socials?.reddit &&
                <SocialMediaCard 
                    type="reddit"
                    social={socials.reddit}
                />
            }
            {
                socials?.twitter &&
                <SocialMediaCard 
                    type="twitter"
                    social={socials.twitter}
                />
            }
        </div>
    )
}

type MediaType = 'website' | 'twitter' | 'instagram' | 'youtube' | 'reddit';

function SocialMediaCard (
    {
        type, social
    } : {
        type: MediaType,
        social: Social
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