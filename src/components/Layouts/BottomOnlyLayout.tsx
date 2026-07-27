import { Suspense } from "react"
import { Outlet } from "react-router"
import BottomBar from "../Navigation/BottomBar"
import LoadingSpinner from "../Loading/Spinner"

function BottomOnlyLayout() {
    return (
        <div className="h-svh overflow-hidden grid grid-rows-[1fr_auto]">
            <Suspense fallback={<LoadingSpinner />}>
                <Outlet />
            </Suspense>
            <BottomBar />
        </div>
    )
}
export default BottomOnlyLayout