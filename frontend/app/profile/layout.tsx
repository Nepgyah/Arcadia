import TopNav from "app/components/navigation/topNav";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <div className="page">
          <div className="page-content">
            <div className="page-wrapper">
                {children}
            </div>
          </div>
        </div>
      </>
    )
  }