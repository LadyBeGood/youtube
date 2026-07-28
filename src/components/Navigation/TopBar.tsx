import { NavLink, Link, useLocation } from "react-router"
import { SearchIcon, NotificationsIcon, FilledNotificationsIcon, SettingsIcon } from "../Icons/Icons"

type TopBarProps = {
    className?: string,
}


export default function TopBar({ className = "" }: TopBarProps) {
    const location = useLocation();
    const isProfilePage = location.pathname === "/profile";

    return (
        <nav className={`bg-black overflow-auto ${className}`}>
            <div className="h-12 flex px-3 lg:px-5 lg:py-8 items-center">
                <Link aria-label="Go to home" className="block h-5 mr-auto" to="/">
                    <img src="./youtube-logo-with-text-dark.svg" alt="" className="h-full w-auto" />
                </Link>

                <input type="search" name="" className="bg-red-200" />


                <div className="flex items-center content-between gap-5 lg:ml-auto">
                    <NavLink aria-label="Go to notifications" to="/notifications" className="flex items-center flex-col">
                        {({ isActive }) => isActive ? <FilledNotificationsIcon /> : <NotificationsIcon />}
                    </NavLink>

                    <Link aria-label="Go to search" to="/search" className="lg:hidden">
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
