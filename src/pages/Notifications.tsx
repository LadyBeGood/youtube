import { BigNotificationsIcon } from "../components/Icons"

const Notifications = () => {
    return (
        <div className="flex items-center justify-center flex-col bg-amber-950 h-full mb-12 overflow-y-scroll no-scrollbar">
            <div className="text-[150px]!">
                <BigNotificationsIcon />
            </div>
            <span>You do not have any notifications</span>
            <span className="text-center">Subscribe to your favourite channels to get notified about their latest videos!</span>
        </div>
    )
}

export default Notifications