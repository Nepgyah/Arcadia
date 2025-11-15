import React from "react";
import PostCard from "@/app/(main)/(primary)/tsunagu/postCard";
import { apiGET, GraphQL } from "@/util/api/api";
import { Post } from "@/types/tsunagu";

export default function TsunaguCommunityPage(
    // props: {
    //     params: Promise<{ circle_id: string}>;
    // }
) {
    // const { circle_id } = await props.params;
    // const { tsunaguCommunity } = await getCommunity(circle_id);
    // console.log(tsunaguCommunity)

    return (
        <div id="post-list" className="row-gap-md">
            posts
            {/* {
                posts ?
                    posts.map((post: Post, idx: number) => (
                        <PostCard
                            post={post}
                            link={`${params.slug}/${post.id}`}
                            key={idx}
                         />
                    ))
                :
                    'Loading'
            } */}
        </div>
    )
}

// async function getCommunity(id: string) {
//     const query =
//     `
//     query {
//         tsunaguCommunity(id: ${id}) {
//             id,
//             title,
//             slug
//         }
//     }
//     `
    
//     const res = await GraphQL<any>(query)
//     return res.data
// }