import { Link } from "react-router-dom";
import { FilledSubscriptionsIcon, MoreIcon } from "../Icons"


type SmallVideoCardProps = {
    isMusical?: boolean;
    title: string;
    channel: string;
    thumbnailURL: string;
    duration: string;
}

export default function SmallVideoCard({ isMusical = false, title, channel, thumbnailURL, duration }: SmallVideoCardProps) {

    return (
        <div className="select-none shrink-0 w-48">
            <Link className="relative" to="/video">
                <img className="w-full aspect-video object-cover" src={thumbnailURL} alt="thumbnail" />

                <div className="absolute rounded right-2 bottom-1 bg-[#00000090] flex text-xs justify-around text-white items-center px-1.5 py-0.5 ">
                    {isMusical &&
                        <span className="material-symbols-outlined" style={{ fontSize: "12px", fontVariationSettings: `"FILL" 1, "wght" 400,"GRAD" 0` }}>music_note</span>
                    }
                    <span>{duration}</span>
                </div>
            </Link>

            <div className="pt-2 pb-2 flex items-start ">
                <Link className="gap-1 flex flex-col" to="/video">
                    <div className="text-left text-sm/tight line-clamp-2">{title}</div>

                    <div className="text-xs text-left text-cool-gray">
                        <span>{channel}</span>
                    </div>
                </Link>

                <button className="shrink-0">
                    <MoreIcon size={20} />
                </button>
            </div>

        </div>
    )
}

