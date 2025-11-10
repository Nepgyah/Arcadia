// Layout to apply asobu color scheming
import '@/styles/pages/tsunagu/_layout.scss';

export default function TsunaguLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="tsunagu-layout">
            {children}
        </div>
    )
}