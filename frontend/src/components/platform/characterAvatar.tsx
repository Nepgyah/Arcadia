import { App, Character } from "@/util/types/shared"
import { Avatar } from "@mui/material"

export default function CharacterAvatar (
    { character, app }
    : 
    {
        character: Character,
        app: App
    }
) {
    return (
        <div className="character-avatar">
            <Avatar
                sx={{ width: '64px', height: '64px' }}
                src={`/storage/characters/${character.id}.jpg`} 
                alt={`${character.first_name}`} 
                className={`app-border--${app}`} 
            />
            <p>{character.first_name} {character.last_name}</p>
        </div>
    )
}