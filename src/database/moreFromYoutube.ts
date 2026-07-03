import type { ComponentType } from "react"
import {
    YoutubeIcon,
    YoutubeKidsIcon,
    YoutubeMusicIcon,
    type IconProps
} from "../components/Icons"

export type MoreFromYoutube = {
    type: "more-from-youtube",
    id: `more-from-youtube-${number}`,
    title: string,
    icon: ComponentType<IconProps>,
}

export const moreFromYoutube: MoreFromYoutube[] = [
    {
        type: "more-from-youtube",
        id: "more-from-youtube-1",
        title: "Premium",
        icon: YoutubeIcon,
    },
    {
        type: "more-from-youtube",
        id: "more-from-youtube-2",
        title: "Youtube Music",
        icon: YoutubeMusicIcon,
    },
    {
        type: "more-from-youtube",
        id: "more-from-youtube-3",
        title: "Youtube Kids",
        icon: YoutubeKidsIcon,
    },
]