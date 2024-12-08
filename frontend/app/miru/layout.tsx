import { miruNavigation } from "../components/navigation/sidebarConfig";
import SideNav from "../components/navigation/sideNav";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="page">
        <SideNav appNavigation={miruNavigation} />
        <div className="page-content">
          <div className="page-wrapper">
              {children}
          </div>
        </div>
      </div>
    )
  }