// Layout to apply miru color scheming
import '@/styles/platform/apps/miru.scss';

export default function MiruLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="miru-layout">
            {children}
        </div>
    )
}