import { GraphQL } from "@/util/api/api";
import ArcHeader from "@/components/arcHeader";
import CommentTree from "./commentTree";

export default async function TsunaguPostPage(
    props: {
        params: Promise<{ post_id: string}>
    }
) {

    const { post_id } = await props.params;
    const { tsunaguPost } = await getPostData(post_id)

    return (
        <div id="post-detail" className="row-gap-md">
            <p className="post-title txt-lg txt-bold m-b-md">{tsunaguPost?.title}</p>
            <p className="post-content m-b-md">{tsunaguPost?.content}</p>

            <div id="comments" className="m-top-xl">
                <ArcHeader title="Ripples" />
                <div id="comment-container" className="flex-row flex-row--gap-md">
                    {
                        tsunaguPost ? 
                            tsunaguPost.comments.map((comment: any, idx: number) => (
                                <CommentTree key={idx} comment={comment} depth={0} />
                        ))
                        :
                            ""
                    }
                </div>
            </div>
        </div>
    )
}

async function getPostData(id: string) {

    const query = `
        query {
            tsunaguPost(id: ${id}) {
                id,
                title,
                content,
                user {
                  username
                },
                comments
            }
        }
    `
    const res = await GraphQL<any>(query);
    return res.data
}