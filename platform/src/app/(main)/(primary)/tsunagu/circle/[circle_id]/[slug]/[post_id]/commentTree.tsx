import { Avatar } from "@mui/material"

export default function CommentTree(
    {
        comment, depth = 0
    } : {
        comment: any,
        depth: number
    }
) {
    return (
        <div className={`comment-tree flex-row flex-row--gap-sm`} style={{ marginLeft: depth * 40 }}>
            {
                depth === 0 && <div className="comment-tree__main-line"></div>
            }
            <div className="comment-tree__data flex-row flex-row--gap-sm p-a-sm border-radius--sm">
                {/* { depth !== 0 && <div className="comment-tree__reply-line" style={{ width: ((depth - 1) * 40) + (depth * 40) + 18, left: -(((depth - 1) * 40) + (depth * 40))}}></div>} */}
                <div className="comment-tree__user flex-col">
                    <Avatar src={`/storage/tsunagu/${comment.user}.jpg`} />
                    <p className="txt-xs">u/{comment.user.username}</p>
                </div>
                <p className="comment-tree__content txt-md">{comment.content}</p>
                <p className="comment-block__upload-date txt-xs">
                {new Date(comment.createdAt).toLocaleString()}
                </p>
            </div>

            {comment.replies && (
                <div className="flex-row flex-row--gap-sm">
                    {comment.replies.map((reply: any) => (
                        <CommentTree key={reply.id} comment={reply} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    )
}