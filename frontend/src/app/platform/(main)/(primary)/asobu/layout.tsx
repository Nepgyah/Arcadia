// Layout to apply asobu color scheming
import '@/styles/platform/apps/asobu.scss';

export default function AsobuLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="asobu-app">
            {children}
        </div>
    )
}