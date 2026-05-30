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

type Trend = {
    type: "trending",
    id: string,
    title: string,
    icon: any,
}

export const trends: Trend[] = [
    {
        type: "trending",
        id: "trending-1",
        title: "Shopping",
        icon: ShoppingIcon,
    },
    {
        type: "trending",
        id: "trending-2",
        title: "Music",
        icon: Music2Icon,
    },
    {
        type: "trending",
        id: "trending-3",
        title: "Movies",
        icon: MovieIcon,
    },
    {
        type: "trending",
        id: "trending-4",
        title: "Hype",
        icon: TrendingIcon,
    },
    {
        type: "trending",
        id: "trending-5",
        title: "Live",
        icon: SensorsIcon,
    },
    {
        type: "trending",
        id: "trending-6",
        title: "Gaming",
        icon: GamingIcon,
    },
    {
        type: "trending",
        id: "trending-7",
        title: "News",
        icon: NewsIcon,
    },
    {
        type: "trending",
        id: "trending-8",
        title: "Sports",
        icon: TrophyIcon,
    },
    {
        type: "trending",
        id: "trending-9",
        title: "Courses",
        icon: EducationIcon,
    },
    {
        type: "trending",
        id: "trending-10",
        title: "Fashion",
        icon: HangerIcon,
    },
    {
        type: "trending",
        id: "trending-11",
        title: "Podcasts",
        icon: PodcastIcon,
    },
    {
        type: "trending",
        id: "trending-12",
        title: "Playables",
        icon: GamepadCircleRightIcon,
    },
    {
        type: "trending",
        id: "trending-13",
        title: "Memberships",
        icon: StarInsideCircleIcon,
    },
]