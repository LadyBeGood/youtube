import { Suspense } from "react"
import { Outlet } from "react-router"

import TopBar from "../Navigation/TopBar"
import BottomBar from "../Navigation/BottomBar"
import LoadingSpinner from "../Loading/Spinner"
import SideBar from "../Navigation/SideBar"

const DefaultLayout = () => {
    return (
        <div className="h-svh overflow-hidden grid grid-rows-[auto_1fr_auto] lg:grid-rows-[auto_1fr] lg:grid-cols-[240px_1fr]">
            <TopBar className="lg:col-span-2" />
            
            <SideBar />

            <Suspense fallback={<LoadingSpinner />}>
                <Outlet />
            </Suspense>
            
            <BottomBar className="lg:hidden" />
        </div>
    )
}
export default DefaultLayout