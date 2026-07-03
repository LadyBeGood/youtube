import { NavLink } from "react-router-dom"
import { FilledHomeIcon, FilledShortsIcon, FilledSubscriptionsIcon, HomeIcon, ShortsIcon, SubscriptionsIcon } from "../Icons"

const BottomBar = () => {
    return (
        <nav className="flex justify-around items-center text-[10px] h-12 border-t-1 border-dark-gray select-none">
            <NavLink to="/" end className="h-10 flex items-center flex-col  justify-between" >
                {({ isActive }) =>
                    <>
                        {isActive ? <FilledHomeIcon /> : <HomeIcon />}
                        <p>Home</p>
                    </>
                }
            </NavLink>

            {/* Silly alignment fix */}
            <NavLink to="/shorts" className="h-10 flex items-center flex-col translate-x-1 justify-between">
                {({ isActive }) =>
                    <>
                        {isActive ? <FilledShortsIcon /> : <ShortsIcon />}
                        <p className="self-end">Shorts</p>
                    </>
                }
            </NavLink>

            <NavLink to="/subscriptions" className="h-10 flex items-center flex-col justify-between">
                {({ isActive }) =>
                    <>
                        {isActive ? <FilledSubscriptionsIcon /> : <SubscriptionsIcon />}
                        <p>Subscriptions</p>
                    </>
                }
            </NavLink>

            <NavLink to="/profile" className="h-10 flex items-center flex-col justify-between">
                {({ isActive }) =>
                    isActive ?
                        <>
                            <div className="h-6 w-6 border-3 border-white aspect-square bg-blue-700 grid place-items-center rounded-full text-[10px]">
                                <img src="./avatar1.webp" className="rounded-full" alt="" />
                            </div>
                            <p>Profile</p>
                        </> :
                        <>
                            <div className="h-6 w-6 aspect-square bg-blue-700 grid place-items-center rounded-full text-sm">
                                <img src="./avatar1.webp" alt="" className="rounded-full" />
                            </div>
                            <p>Profile</p>
                        </>
                }
            </NavLink>
        </nav>
    )
}
export default BottomBar