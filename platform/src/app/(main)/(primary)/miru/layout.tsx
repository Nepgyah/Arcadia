// Layout to apply miru color scheming
// import '@/styles/platform/apps/miru.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Miru | Arcadia",
};

export default function MiruLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="miru-layout">
            {children}
        </div>
    )
}