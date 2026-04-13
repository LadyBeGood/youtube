import { NavLink } from "react-router-dom"
import { FilledHomeIcon, FilledSubscriptionsIcon, HomeIcon, SubscriptionsIcon } from "./Icons"

const BottomBar = () => {
    return (
        <nav className="flex justify-around items-center p-2 text-[10px] h-12 border-t-1 border-dark-gray select-none">
            <NavLink to="/" end>
                {({ isActive }) =>
                    <div className="flex items-center flex-col">
                        {isActive ? <FilledHomeIcon /> : <HomeIcon />}
                        <p>Home</p>
                    </div>
                }
            </NavLink>
            <NavLink to="/subscriptions">
                {({ isActive }) =>
                    <div className="flex items-center flex-col">
                        {isActive ? <FilledSubscriptionsIcon /> : <SubscriptionsIcon />}
                        <p>Subscriptions</p>
                    </div>
                }
            </NavLink>

            <NavLink to="/profile">
                {({ isActive }) =>
                    isActive ?
                        <div className="flex items-center flex-col"><div className="h-6 w-6 border-3 border-white aspect-square bg-blue-700 grid place-items-center rounded-full text-[10px]"><img src="./avatar1.webp" className="rounded-full" alt="" /></div><p>Profile</p></div> :
                        <div className="flex items-center flex-col"><div className="h-6 w-6 aspect-square bg-blue-700 grid place-items-center rounded-full text-sm"><img src="./avatar1.webp" alt="" className="rounded-full" /></div><p>Profile</p></div>
                }
            </NavLink>
        </nav>
    )
}
export default BottomBar