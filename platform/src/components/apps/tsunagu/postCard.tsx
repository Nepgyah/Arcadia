// import "@/styles/platform/components/postCard.scss";
import Link from "next/link";

export default function PostCard( 
    {
        post, link
    } : {
        post: any,
        link: string
    }
) {
    return (
        <Link href={link}>
            <div className="post-card">
                <p className="post-card__community txt-xs">c/{post.community.title} | {post.user.username}</p>
                <p className="post-card__title txt-l">{post.title}</p>
                <p className="post-card__content">{post.content}</p>
                <div className="post-card__footer">
                    <div className="votes-comments flex flex--small-gap">
                        <p><span>Votes:</span> {post.vote_score}</p>
                        <p><span>Comments:</span> {post.comment_count}</p>
                    </div>
                    <p className="date">{new Date(post.created_at).toDateString()}</p>
                </div>
            </div>
        </Link>
    )
}