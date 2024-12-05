import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import ProfileIcon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/QuestionMark';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import WatchIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';

export const sidebar = {
    miru: [
        { name: "Miru Home", link: "/miru", icon: < DashboardIcon />},
        { name: "List", link: "/miru/animelist", icon: < ListIcon />},
        { name: "Search", link: "/miru/search", icon: < SearchIcon />},
        { name: "Watch", link: "/miru/watch", icon: < WatchIcon />}
    ],
    asobu: [
        { name: "Miru Home", link: "/asobu", icon: < DashboardIcon />},
        { name: "Library", link: "/asobu/library", icon: < DashboardIcon />},
        { name: "Store", link: "/asobu/store", icon: < DashboardIcon />},
        { name: "Mods", link: "/asobu/mods", icon: < DashboardIcon />}
    ],
    default: [
        { name: "Home", link: "/", icon: < HomeIcon />},
        { name: "Profile", link: "/profile", icon: < ProfileIcon />},
        { name: "Settings", link: "/settings", icon: < SettingsIcon />},
        { name: "Help", link: "/help", icon: < HelpIcon />}
    ],
}