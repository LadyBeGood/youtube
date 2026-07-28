import { NavLink } from "react-router";
import { FilledHomeIcon, FilledShortsIcon, FilledSubscriptionsIcon, HomeIcon, ShortsIcon, SubscriptionsIcon } from "../components/Icons/Icons"

export type Route = {
    type: "route",
    id: `route-${number}`,
    title: string,
    link: string,
    icon: any,
    filledIcon: any,
}

export const routes: Route[] = [
    {
        type: "route",
        id: "route-1",
        title: "Home",
        link: "/",
        icon: HomeIcon,
        filledIcon: FilledHomeIcon,
    },
    {
        type: "route",
        id: "route-2",
        title: "Shorts",
        link: "/shorts",
        icon: ShortsIcon,
        filledIcon: FilledShortsIcon,
    },
    {
        type: "route",
        id: "route-3",
        title: "Subscriptions",
        link: "/subscriptions",
        icon: SubscriptionsIcon,
        filledIcon: FilledSubscriptionsIcon,
    },
    {
        type: "route",
        id: "route-4",
        title: "Profile",
        link: "/profile",
        icon: () =>            
            <div className="h-6 w-6 aspect-square bg-blue-700 grid place-items-center rounded-full text-sm">
                <img src="./avatar1.webp" alt="" className="rounded-full" />
            </div>,
        filledIcon: () =>
            <div className="h-6 w-6 border-2 border-white aspect-square bg-blue-700 grid place-items-center rounded-full text-[10px]">
                <img src="./avatar1.webp" className="rounded-full" alt="" />
            </div>,
    },
]