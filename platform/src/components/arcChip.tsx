import { App } from "@/types/shared";

export default function ArcChip({label, app} : {label:string, app: App}) {
    return (
        <div className={`arc-chip box-shadow p-a-xs bg-${app}-base clr-platform-dark border-radius-lg`}>
            {label}
        </div>
    )
}