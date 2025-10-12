export default function CharacterCard(
    {
        characterId,
        characterName,
        characterDescription,
        voiceActorId,
        voiceActorName,
        voiceActorDescription
    } : {
        characterId: number,
        characterName: string,
        characterDescription: string,
        voiceActorId: number,
        voiceActorName: string,
        voiceActorDescription: string,
    }
) {
    return (
        <div className="character-card bg-platform-dark border-radius-sm box-shadow">
            <img className="2d" src={`/storage/characters/${characterId}.jpg`} />
            <div className="text">
                <div className="character">
                    <p className="main">{characterName}</p>
                    <p className="secondary">{characterDescription}</p>
                </div>
                <div className="voice-actor">
                    <p className="main">{voiceActorName}</p>
                    <p className="secondary">{voiceActorDescription}</p>
                </div>
            </div>
            <img className="3d" src={`/storage/voice-actors/${voiceActorId}.jpg`} />
        </div>
    )
}