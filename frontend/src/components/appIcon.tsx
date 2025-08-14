import Image from 'next/image'

type app = 
    'miru' | 
    'yomu' | 
    'asobu' | 
    'kau' | 
    'tsunagu' | 
    'iku' | 
    'hiku' | 
    'kiku' |
    'kumitateru' |
    'shiru' |
    'todokeru' |
    'manabu'

export default function appIcon({ app, size=36 } : { app: app, size?: number}) {
    return (
        <Image
            src={`/global/app-icons/${app}.svg`}
            alt={`${app}`}
            width={size}
            height={size}
        />
    )
}