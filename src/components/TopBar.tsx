import { Link, useLocation } from "react-router-dom"

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
    return (
        <nav className="flex no-scrollbar overflow-y-scroll pb-3 pl-3 flex-nowrap gap-2">
            {isHomePage &&
                <>
                    <button className="bg-dark-gray whitespace-nowrap px-2 flex items-center rounded-sm">
                        <span className="material-symbols-outlined">Explore</span>
                    </button>
                    <div className="px-[1px] my-0.5 mx-1 bg-dark-gray  select-none"></div>
                </>
            }

            {filters.map((recommendation, index) => <button key={index} className="bg-dark-gray whitespace-nowrap box-content px-3.5 py-1.5 rounded-lg text-sm">{recommendation}</button>)}
        </nav>
    )
}

const SubscriptionsBar = () => {
    return (
        <nav className="flex no-scrollbar overflow-x-scroll pb-3 pl-3 flex-nowrap  h-25 ">
            {subscriptions.map((subscription, index) =>
                <button key={index} className="grid grid-rows-[1fr_20px] h-full place-items-center aspect-square">
                    <img src="avatar.webp" alt="" className="h-full w-auto block rounded-full" />
                    <span className="block w-full whitespace-nowrap overflow-hidden px-2 text-xs truncate ">
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
        <nav className="bg-black overflow-scroll">
            <div className="h-12 flex px-3 items-center">
                <Link className="block h-5 mr-auto" to="/">
                    <img src="./youtube-logo-with-text-dark.webp" alt="youtube" className="h-full w-auto" />
                </Link>
                <div className="flex gap-5">
                    <Link to="/notifications">
                        <span className="material-symbols-outlined">notifications</span>
                    </Link>
                    <Link to="/search">
                        <span className="material-symbols-outlined">search</span>
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