// Layout to apply asobu color scheming
import ArcHeader from '@/components/arcHeader';
import WIP from '@/components/wip';
import '@/styles/pages/tsunagu/_layout.scss';
import { GraphQL } from '@/util/api/api';
import { Avatar, Breadcrumbs, Link, Typography } from '@mui/material';

export default async function TsunaguLayout({children} : {children: React.ReactNode}) {
    const { tsunaguCommunities } = await getTsunaguCommunity();

    return (
        <div id="tsunagu-layout">
            <Breadcrumbs>
                <Typography>Tsunagu</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div className="grid grid--side-col-reverse">
                <div className="flex-row flex-row--gap-md">
                    <div>
                        <ArcHeader title="Your Profile" />
                        <WIP />
                    </div>
                        <div>
                            <ArcHeader title="Your Communities" />
                            <div className="flex-row flex-row--gap-sm">
                            {
                                tsunaguCommunities.map((community: any, idx: number) => (
                                    <div className="community-card flex-col flex-col--gap-sm">
                                        <Avatar src={`/storage/tsunagu/${community.id}.jpg`} />
                                        <Link href={`/tsunagu/circle/${community.id}/${community.slug}`}>c/{community.title}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

async function getTsunaguCommunity() {
    const query =
    `
    query {
        tsunaguCommunities(count: 5) {
            id,
            title,
            slug
        }
    }
    `

    const res = await GraphQL<any>(query)
    return res.data
}