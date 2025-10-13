// Layout to apply yomu color scheming
// import '@/styles/platform/apps/yomu.scss';

export default function YomuLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="yomu-app">
            {children}
        </div>
    )
}