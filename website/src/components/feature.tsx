export default function ArcFeature(
    {
        icon,
        header,
        description,
        color = 'arc-tertiary'
    } : {
        icon: string,
        header: string,
        description: string,
        color?: string
    }
) {
    return (
        <div className="arc-feature">
            <div className={`arc-feature__icon bg-${color}`}>
                <img src={`/icons/${icon}.svg`} alt={icon} />
            </div>
            <h3 className={`arc-feature__header border-${color}`}>{header}</h3>
            <p className="arc-feature__text">{description}</p>
        </div>
    )
}