// Layout to apply yomu color scheming
import '@/styles/pages/yomu/_layout.scss';

export default function YomuLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="yomu-layout">
            {children}
        </div>
    )
}