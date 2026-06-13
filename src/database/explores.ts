import {
    ExploreIcon,
    Music2Icon,
    ShoppingIcon,
    MovieIcon,
    TrendingIcon,
    SensorsIcon,
    GamingIcon,
    NewsIcon,
    TrophyIcon,
    EducationIcon,
    HangerIcon,
    PodcastIcon,
    GamepadCircleRightIcon,
    StarInsideCircleIcon,
} from "../components/Icons"

export type Explore = {
    type: "explore",
    id: `explore-${number}`,
    title: string,
    icon: any,
}

export const explores: Explore[] = [
    {
        type: "explore",
        id: "explore-1",
        title: "Shopping",
        icon: ShoppingIcon,
    },
    {
        type: "explore",
        id: "explore-2",
        title: "Music",
        icon: Music2Icon,
    },
    {
        type: "explore",
        id: "explore-3",
        title: "Movies",
        icon: MovieIcon,
    },
    {
        type: "explore",
        id: "explore-4",
        title: "Hype",
        icon: TrendingIcon,
    },
    {
        type: "explore",
        id: "explore-5",
        title: "Live",
        icon: SensorsIcon,
    },
    {
        type: "explore",
        id: "explore-6",
        title: "Gaming",
        icon: GamingIcon,
    },
    {
        type: "explore",
        id: "explore-7",
        title: "News",
        icon: NewsIcon,
    },
    {
        type: "explore",
        id: "explore-8",
        title: "Sports",
        icon: TrophyIcon,
    },
    {
        type: "explore",
        id: "explore-9",
        title: "Courses",
        icon: EducationIcon,
    },
    {
        type: "explore",
        id: "explore-10",
        title: "Fashion",
        icon: HangerIcon,
    },
    {
        type: "explore",
        id: "explore-11",
        title: "Podcasts",
        icon: PodcastIcon,
    },
    {
        type: "explore",
        id: "explore-12",
        title: "Playables",
        icon: GamepadCircleRightIcon,
    },
    {
        type: "explore",
        id: "explore-13",
        title: "Memberships",
        icon: StarInsideCircleIcon,
    },
]