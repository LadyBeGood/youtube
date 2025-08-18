import { NavLink } from "react-router-dom"

const BottomBar = () => {
    return (
        <nav className="flex justify-around items-center p-2 text-[10px] h-12 border-t-1 border-dark-gray">
            <NavLink to="/" end className="flex items-center flex-col">
                {({ isActive }) =>
                    isActive ?
                        <><span className="material-symbols-outlined active">home</span><p>Home</p></> :
                        <><span className="material-symbols-outlined">home</span><p>Home</p></>
                }
            </NavLink>
            <NavLink to="/subscriptions" className="flex items-center flex-col">
                {({ isActive }) =>
                    isActive ?
                        <><span className="material-symbols-outlined active">subscriptions</span><p>Subscriptions</p></> :
                        <><span className="material-symbols-outlined">subscriptions</span><p>Subscriptions</p></>
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