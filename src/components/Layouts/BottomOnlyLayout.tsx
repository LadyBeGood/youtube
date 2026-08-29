import { Suspense } from "react"
import { Outlet } from "react-router"
import BottomBar from "../Navigation/BottomBar"
import LoadingSpinner from "../Loading/Spinner"

function BottomOnlyLayout() {
    return (
        <div className="h-svh grid grid-rows-[1fr_auto]">
            <div className="min-h-0 relative">
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet /> {/* It goes here */}
                </Suspense>
            </div>
            <BottomBar />
        </div>
    )
}
export default BottomOnlyLayout