import { NavLink, Link, useLocation, useSearchParams } from "react-router-dom"
import { SearchIcon, NotificationsIcon } from "./Icons"




export default function TopBar() {
    const location = useLocation();

    return (
        <nav className="bg-black overflow-auto">
            <div className="h-12 flex px-3 items-center">
                <Link className="block h-5 mr-auto" to="/">
                    <img src="./youtube-logo-with-text-dark.svg" alt="youtube" className="h-full w-auto" />
                </Link>
                <div className="flex items-center content-between gap-5">
                    <NavLink to="/notifications" className="flex items-center flex-col">
                        {({ isActive }) => <NotificationsIcon isActive={isActive} />}
                    </NavLink>
                    <Link to="/search">
                        <SearchIcon />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
