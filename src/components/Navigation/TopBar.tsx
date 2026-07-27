import { NavLink, Link, useLocation } from "react-router"
import { SearchIcon, NotificationsIcon, FilledNotificationsIcon, SettingsIcon } from "../Icons/Icons"


export default function TopBar() {
    const location = useLocation();
    const isProfilePage = location.pathname === "/profile";

    return (
        <nav className="bg-black overflow-auto">
            <div className="h-12 flex px-3 items-center">
                <Link aria-label="Go to home" className="block h-5 mr-auto" to="/">
                    <img src="./youtube-logo-with-text-dark.svg" alt="" className="h-full w-auto" />
                </Link>

                <div className="flex items-center content-between gap-5">
                    <NavLink aria-label="Go to notifications" to="/notifications" className="flex items-center flex-col">
                        {({ isActive }) => isActive ? <FilledNotificationsIcon /> : <NotificationsIcon />}
                    </NavLink>

                    <Link aria-label="Go to search" to="/search">
                        <SearchIcon />
                    </Link>

                    {isProfilePage &&
                        <Link aria-label="Open settings" to="/settings">
                            <SettingsIcon size={22} />
                        </Link>
                    }
                </div>
            </div>
        </nav>
    )
}
