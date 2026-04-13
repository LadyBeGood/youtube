import { FilledNotificationsIcon, NotificationsIcon } from "../components/Icons"

export default function Notifications() {

    return (
        <div className="flex items-center justify-center flex-col h-full mb-12 overflow-y-scroll no-scrollbar">
            <FilledNotificationsIcon height={150} width={150} />
            <span className="text-lg pt-3 pb-1">You do not have any notifications</span>
            <span className="text-center text-sm mx-10 text-stone-500">Subscribe to your favourite channels to get notified about their latest videos!</span>
        </div>
    )
}
