// Layout to apply asobu color scheming
import '@/styles/platform/pages/tsunagu.scss';

export default function TsunaguLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="tsunagu-layout">
            {children}
        </div>
    )
}