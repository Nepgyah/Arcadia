// Layout to apply miru color scheming
import '@/styles/pages/kiku/_layout.scss';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kiku | Arcadia",
};

export default function KikuLayout({children} : {children: React.ReactNode}) {
    return (
        <div id="kiku-layout">
            {children}
        </div>
    )
}