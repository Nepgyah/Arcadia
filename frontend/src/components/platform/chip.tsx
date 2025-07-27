import { App } from "@/util/types/shared";
import { Chip } from "@mui/material";

export default function TagChip({ value, app} : { value: string,  app: App}) {
    return (
        <Chip label={value} className={`app-bg--${app}`} />
    )
}