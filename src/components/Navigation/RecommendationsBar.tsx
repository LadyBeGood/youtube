import { NavLink, useSearchParams } from "react-router"
import { ExploreIcon } from "../Icons/Icons";
import { HomeFilters, subscriptionsFilters } from "../../database/filters";


type RecommendationsBarProps = {
    isHomePage?: boolean,
    onExploreButtonClick?: () => void,
}

export default function RecommendationsBar({ isHomePage = false, onExploreButtonClick = () => { } }: RecommendationsBarProps) {
    const [Props] = useSearchParams();
    const activeFilter = Props.get("filter") ?? "All";

    return (
        <nav className="flex no-scrollbar items-center overflow-y-auto pb-3 px-3 flex-nowrap gap-2 select-none">
            {isHomePage &&
                <>
                    <button
                        title="Explore"
                        aria-label="Explore"
                        className="lg:hidden bg-(--dark-gray) whitespace-nowrap h-8 px-2 cursor-pointer flex items-center rounded-sm"
                        onClick={onExploreButtonClick}
                    >
                        <ExploreIcon />
                    </button>
                    <div className="lg:hidden w-[1px] shrink-0 h-5 mx-1.5 bg-white/30 select-none"></div>
                </>
            }

            {(isHomePage ? HomeFilters : subscriptionsFilters).map((recommendation) => {
                const isActive = activeFilter === recommendation;


                // special case: "All" should just go home
                const to = recommendation === "All"
                    ? isHomePage
                        ? "/"
                        : "/subscriptions"
                    : `?filter=${encodeURIComponent(recommendation)}`;


                return (
                    <NavLink
                        key={recommendation}
                        to={to}
                        className={`whitespace-nowrap box-content px-3.5 py-1.5 rounded-lg text-sm
                             ${isActive ? "bg-white text-(--dark-gray)" : "bg-(--dark-gray) text-white"}`}
                    >
                        {recommendation}
                    </NavLink>
                );
            })}
        </nav>
    );
}
