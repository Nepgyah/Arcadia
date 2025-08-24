import { App } from "@/util/types/shared";
import { Chip } from "@mui/material";

export default function TagChip({
        value, app, whiteText
    } : { 
        value: string,  
        app: App,
        whiteText?: boolean
    }) {
    return (
        <Chip label={value} className={`bg-${app}-base ${whiteText && "clr-txt-light"}`} />
    )
}