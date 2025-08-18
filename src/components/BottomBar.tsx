import { NavLink } from "react-router-dom"
import { HomeIcon, NotificationsIcon, SubscriptionsIcon } from "./Icons"

const BottomBar = () => {
    return (
        <nav className="flex justify-around items-center p-2 text-[10px] h-12 border-t-1 border-dark-gray">
            <NavLink to="/" end className="flex items-center flex-col">
                {({ isActive }) =>
                    <>
                        <HomeIcon isActive={isActive} />
                        <p>Home</p>
                    </>
                }
            </NavLink>
            <NavLink to="/subscriptions" className="flex items-center flex-col">
                {({ isActive }) =>
                    <>
                        <SubscriptionsIcon isActive={isActive} />
                        <p>Subscriptions</p>
                    </>
                }
            </NavLink>
            <NavLink to="/notifications" className="flex items-center flex-col">
                {({ isActive }) =>
                    <>
                        <NotificationsIcon isActive={isActive} />
                        <p>Notifications</p>
                    </>
                }
            </NavLink>
            <NavLink to="/profile" className="flex items-center flex-col">
                {({ isActive }) =>
                    isActive ?
                        <><div className="h-6 w-6 border-3 border-white aspect-square bg-blue-700 grid place-items-center rounded-full text-[10px]">M</div><p>You</p></> :
                        <><div className="h-6 w-6 aspect-square bg-blue-700 grid place-items-center rounded-full text-sm">M</div><p>You</p></>
                }
            </NavLink>
        </nav>
    )
}
export default BottomBar