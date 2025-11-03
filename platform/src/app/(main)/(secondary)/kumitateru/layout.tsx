// Layout to apply kumitateru color scheming
import '@/styles/pages/kumitateru/_layout.scss'

export default function KumitateruLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="kumitateru-layout">
            {children}
        </div>
    )
}