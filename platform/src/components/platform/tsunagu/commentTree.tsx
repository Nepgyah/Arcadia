import { Comment } from "@/types/tsunagu"

export default function CommentCard(
    {
        comment, depth = 0
    } : {
        comment: Comment,
        depth: number
    }
) {
    return (
        <div className="comment-group" style={{ marginLeft: depth * 40 }}>
            <div className="comment-block p-left-xs">
                <div className={`${depth != 0 ? 'depth-arrows' : 'hide'}`}>
                    <div className="vertical-line"></div>
                    <div className="horizontal-line"></div>
                </div>
                <p className="comment-block__username txt-xs">{comment.user.username}</p>
                <p className="comment-block__content txt-md">{comment.content}</p>
                <small className="comment-block__upload-date txt-xs">
                {new Date(comment.created_at).toLocaleString()}
                </small>
            </div>

            {/* render replies recursively */}
            {comment.replies.length > 0 && (
                <div>
                {comment.replies.map((reply: Comment) => (
                    <CommentCard key={reply.id} comment={reply} depth={depth + 1} />
                ))}
                </div>
            )}
        </div>
    )
}