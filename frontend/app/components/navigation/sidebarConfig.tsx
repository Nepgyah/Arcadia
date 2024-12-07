import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import ProfileIcon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/QuestionMark';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import WatchIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { SvgIconComponent } from '@mui/icons-material';

interface SideNavItem {
    name: string;
    path: string;
    icon?: React.ReactNode;
    submenu?: boolean;
    subMenuItems?: SideNavItem[]
}

export const miruNavigation: SideNavItem[] =
[
    { 
        name: "Miru Home",
        path: "/miru", 
        icon: < DashboardIcon />
    },
    { 
        name: "List", 
        path: "/miru/animelist", 
        icon: < ListIcon />,
        submenu: true,
        subMenuItems: [
            {
                name: "Seasonal",
                path: "/miru/list/seasonal",
            },
            {
                name: "Top Anime",
                path: "/miru/list/top",
            }
        ]
    },
    { 
        name: "Search", 
        path: "/miru/search", 
        icon: < SearchIcon />
    },
    { 
        name: "Watch", 
        path: "/miru/watch", 
        icon: < WatchIcon />
    }
]

export const asobuNavigation: SideNavItem[] = [
    { 
        name: "Miru Home", 
        path: "/asobu", 
        icon: < DashboardIcon />
    },
    { 
        name: "Library", 
        path: "/asobu/library", 
        icon: < DashboardIcon />
    },
    { 
        name: "Store", 
        path: "/asobu/store", 
        icon: < DashboardIcon />
    },
    { 
        name: "Mods", 
        path: "/asobu/mods", 
        icon: < DashboardIcon />
    }
]
export const defaultNavigation: SideNavItem[] = [
    { 
        name: "Home", 
        path: "/", 
        icon: < HomeIcon />
    },
    { 
        name: "Profile", 
        path: "/profile", 
        icon: < ProfileIcon />
    },
    { 
        name: "Settings", 
        path: "/settings", 
        icon: < SettingsIcon />
    },
    { 
        name: "Help", 
        path: "/help", 
        icon: < HelpIcon />
    }
]