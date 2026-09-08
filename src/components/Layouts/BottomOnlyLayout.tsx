import { Suspense } from "react"
import { Outlet } from "react-router"
import BottomBar from "../Navigation/BottomBar"
import LoadingSpinner from "../Loading/Spinner"
import SideBar from "../Navigation/SideBar"

function BottomOnlyLayout() {
    return (
        <div className="h-svh w-90 grid grid-rows-[1fr_auto]">
            
            {/* <SideBar /> */}
            
            <div className="min-h-0 relative">
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet /> {/* It goes here */}
                </Suspense>
            </div>
            
            {/* <BottomBar className="lg:hidden" /> */}
            <BottomBar className="" />
        </div>
    )
}
export default BottomOnlyLayout