import { Outlet } from "react-router-dom"
import TopBar from "./TopBar"
import BottomBar from "./BottomBar"

const Layout = () => {
    return (
        <>
            <TopBar />
            <Outlet />
            <BottomBar />
        </>
    )
}
export default Layout