import { Suspense } from "react"
import { Outlet } from "react-router"
import TopBar from "../Navigation/TopBar"
import BottomBar from "../Navigation/BottomBar"
import LoadingSpinner from "../Loading/Spinner"

const DefaultLayout = () => {
    return (
        <div className="h-svh overflow-hidden grid grid-rows-[auto_1fr_auto]">
            <TopBar />
            <Suspense fallback={<LoadingSpinner />}>
                <Outlet />
            </Suspense>
            <BottomBar />
        </div>
    )
}
export default DefaultLayout