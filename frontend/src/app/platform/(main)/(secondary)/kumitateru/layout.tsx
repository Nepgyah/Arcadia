// Layout to apply kumitateru color scheming
import '@/styles/platform/apps/kumitateru.scss';

export default function KumitateruLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="kumitateru-app">
            {children}
        </div>
    )
}