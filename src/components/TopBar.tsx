import { NavLink, Link, useLocation, useSearchParams } from "react-router-dom"
import { SearchIcon, ExploreIcon, NotificationsIcon } from "./Icons"

const filters = [
    "All",
    "New to You",
    "Gaming",
    "News",
    "Music",
    "Mixes",
    "Comedy",
    "Recently uploaded"
]

const subscriptions = [
    "SuperSimpleDev",
    "Mud Flaps",
    "David P - Digital Art",
    "T E R A V I B E",
    "made from dreams",
    "Dandelion Medical Animation",
    "Dreksler Astral",
    "Dreksler Astral",
    "Dreksler Astral",
    "Dreksler Astral",
    "Dreksler Astral",
    "Dreksler Astral",
    "Dreksler Astral",
    "Dreksler Astral",
    "Dreksler Astral",

]

const RecommendationBar = ({ isHomePage = false }: { isHomePage?: boolean }) => {
    const [params] = useSearchParams();
    const activeFilter = params.get("filter") ?? "All";

    return (
        <nav className="flex no-scrollbar overflow-y-auto pb-3 px-3 flex-nowrap gap-2 select-none">
            {isHomePage &&
                <>
                    <button className="bg-dark-gray whitespace-nowrap px-2 cursor-pointer flex items-center rounded-sm">
                        <ExploreIcon />
                    </button>
                    <div className="px-[1px] my-0.5 mx-1 bg-dark-gray  select-none"></div>
                </>
            }

            {filters.map((recommendation) => {
                const isActive = activeFilter === recommendation;


                // special case: "All" should just go home
                const to = recommendation === "All"
                    ? "/"
                    : `?filter=${encodeURIComponent(recommendation)}`;


                return (
                    <NavLink
                        key={recommendation}
                        to={to}
                        className={
                            `whitespace-nowrap box-content px-3.5 py-1.5 rounded-lg text-sm
                             ${isActive ? "bg-white text-dark-gray" : "bg-dark-gray text-white"}`
                        }
                    >
                        {recommendation}
                    </NavLink>
                );
            })}
        </nav>
    )
}

const SubscriptionsBar = () => {
    return (
        <nav className="flex no-scrollbar overflow-x-auto pb-3 px-3 flex-nowrap  h-25 ">
            {subscriptions.map((subscription, index) =>
                <button key={index} className="grid grid-rows-[1fr_20px] h-full place-items-center aspect-square">
                    <img src="./avatar.webp" alt="" className="h-full w-auto block rounded-full" />
                    <span className="block w-full px-2 text-xs truncate ">
                        {subscription}
                    </span>
                </button>
            )}
        </nav>
    )
}

const TopBar = () => {
    const location = useLocation();

    return (
        <nav className="bg-black overflow-auto">
            <div className="h-12 flex px-3 items-center">
                <Link className="block h-5 mr-auto" to="/">
                    <img src="./youtube-logo-with-text-dark.svg" alt="youtube" className="h-full w-auto" />
                </Link>
                <div className="flex items-center content-between gap-5">
                    <NavLink to="/notifications" className="flex items-center flex-col">
                        {({ isActive }) => <NotificationsIcon isActive={isActive} />}
                    </NavLink>
                    <Link to="/search">
                        <SearchIcon />
                    </Link>
                </div>
            </div>

            {location.pathname === "/" ? <RecommendationBar isHomePage={true} /> :
                location.pathname === "/subscriptions" ? <><SubscriptionsBar /><RecommendationBar isHomePage={false} /></> :
                    null}

        </nav>
    )
}

export default TopBar