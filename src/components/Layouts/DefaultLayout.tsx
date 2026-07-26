import { Outlet } from "react-router-dom"
import TopBar from "../Navigation/TopBar"
import BottomBar from "../Navigation/BottomBar"

const DefaultLayout = () => {
    return (
        <div className="h-svh overflow-hidden grid grid-rows-[auto_1fr_auto]">
            <TopBar />
            <Outlet />
            <BottomBar />
        </div>
    )
}
export default DefaultLayout