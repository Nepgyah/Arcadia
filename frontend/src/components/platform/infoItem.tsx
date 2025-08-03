export default function InfoItem(
    { label, value, unit } 
    : 
    {
        label: string,
        value?: string,
        unit?: string
    }
) {
    return (
        <p className='info-item'>
            <span className="label">{label}</span>: <span className="value">{value} {unit}</span>
        </p>
    )
}