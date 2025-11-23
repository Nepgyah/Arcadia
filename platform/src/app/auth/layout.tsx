import "@/styles/pages/auth.scss";

export default function AuthLayout({children} : { children: React.ReactNode})  {
    return (
        <div id="auth-layout">
            {children}
        </div>
    )
}