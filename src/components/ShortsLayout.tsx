import { Outlet } from "react-router-dom"
import BottomBar from "./BottomBar"

const ShortsLayout = () => {
    return (
        <div className="h-svh overflow-hidden grid grid-rows-[1fr_auto]">
            <Outlet />
            <BottomBar />
        </div>
    )
}
export default ShortsLayout