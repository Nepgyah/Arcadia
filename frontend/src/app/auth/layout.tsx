import "@/styles/auth/_main.scss";

export default function AuthLayout({children} : { children: React.ReactNode})  {
    return (
        <body>
            <div id="auth-layout">
                {children}
            </div>
        </body>
    )
}