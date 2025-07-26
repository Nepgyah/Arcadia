export default function InfoItem(
    { label, value } 
    : 
    {
        label: string,
        value?: string
    }
) {
    return (
        <p className='info-item'>
            <span className="label">{label}</span>: <span className="value">{value}</span>
        </p>
    )
}