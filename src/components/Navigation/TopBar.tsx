import { NavLink, Link, useLocation } from "react-router"
import { SearchIcon, NotificationsIcon, FilledNotificationsIcon, SettingsIcon, MicrophoneIcon } from "../Icons/Icons"

type TopBarProps = {
    className?: string,
}


export default function TopBar({ className = "" }: TopBarProps) {
    const location = useLocation();
    const isProfilePage = location.pathname === "/profile";

    return (
        <nav className={`bg-black overflow-auto ${className}`}>
            <div className="h-12 flex px-3 lg:px-5 lg:h-14 items-center">
                <Link aria-label="Go to home" className="block h-5 mr-auto" to="/">
                    <img src="./youtube-logo-with-text-dark.svg" alt="" className="h-full w-auto" />
                </Link>

                <div className="hidden lg:flex h-10 w-125 relative items-center border-1 border-white/20 rounded-full pl-2 pr-1 gap-2">
                    <SearchIcon size={22} />
                    <input type="search" name="" className="grow-1" placeholder="Search" />
                    <button className="bg-white/20 text-white rounded-full p-1">
                        <MicrophoneIcon />
                    </button>
                </div>


                <div className="flex items-center content-between gap-5 lg:ml-auto">
                    <NavLink aria-label="Go to notifications" to="/notifications" className="flex items-center flex-col">
                        {({ isActive }) => isActive ? <FilledNotificationsIcon /> : <NotificationsIcon />}
                    </NavLink>

                    <Link aria-label="Go to search" to="/search" className="lg:hidden">
                        <SearchIcon />
                    </Link>

                    <Link
                        aria-label="Open settings"
                        to="/settings"
                        className={isProfilePage ? "" : "hidden lg:inline-flex"}
                    >
                        <SettingsIcon size={22} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
