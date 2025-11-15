// import "@/styles/platform/components/postCard.scss";
import Link from "next/link";
import VoteIcon from '@mui/icons-material/ThumbsUpDown';
import CommentIcon from '@mui/icons-material/Forum';
import { Avatar } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
export default function PostCard( 
    {
        post, link, imageLink, details
    } : {
        post: any,
        link: string,
        imageLink: string,
        details: string
    }
) {
    return (
        <Link href={link}>
            <div className="post-card p-a-lg border-radius-md flex-row flex-row--gap-sm">
                <div className="post-card__details">
                    <div className="detail-left">
                        <Avatar src={imageLink} />
                        <p className="post-card__community txt-xs">{details}</p>
                    </div>
                    <div className="detail-right">
                        <p className="date txt-xs">{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
                    </div>
                </div>
                <p className="post-card__title txt-md">{post.title}</p>
                <p className="post-card__content txt-xs">{post.content}</p>
                <div className="post-card__footer">
                    <div className="votes-comments">
                        <div><VoteIcon /><p>{post.voteScore}</p></div>
                        <div><CommentIcon /><p>{post.commentCount}</p></div>
                    </div>                    
                </div>
            </div>
        </Link>
    )
}