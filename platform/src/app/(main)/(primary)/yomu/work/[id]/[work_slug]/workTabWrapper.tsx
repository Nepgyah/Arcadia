'use client';

import ArcTab from "@/components/arcTab";
import { Children, useState } from "react";

export default function WorkTabWrapper({ children } : { children: React.ReactNode}) {
    const [tab, setTab] = useState<string>('0');
    
    return (
        <div>
            <div id="tab-container" className="flex-col flex-col--gap-sm m-b-lg">
                <ArcTab label="Overview" value="0" currentValue={tab} icon="info" setTabFunc={setTab} />
                <ArcTab label="Characters" value="1" currentValue={tab} icon="people" setTabFunc={setTab} />
                <ArcTab label="Summary" value="2" currentValue={tab} icon="target" setTabFunc={setTab} />
                <ArcTab label="Stats" value="3" currentValue={tab} icon="graph" setTabFunc={setTab} />
                <ArcTab label="Reviews" value="4" currentValue={tab} icon="comment" setTabFunc={setTab} />
            </div>
            {Children.map(children, (child, idx) => (
                <div hidden={tab !== `${idx}`}>
                    {child}
                </div>
            ))}
        </div>
    )
}