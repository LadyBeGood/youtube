import { Link } from "react-router-dom";
import { FilledSubscriptionsIcon, MoreIcon } from "./Icons"


type SmallPlaylistCardProps = {
    title: string;
    channel: string;
    thumbnailURL: string;
    videoCount: number;
}

export default function SmallPlaylistCard({ title, channel, thumbnailURL, videoCount }: SmallPlaylistCardProps) {

    return (
        <div className="select-none shrink-0 w-48">
            <Link className="relative" to="/video">
                <img className="w-full aspect-video object-cover" src={thumbnailURL} alt="thumbnail" />

                <div className="absolute rounded right-2 bottom-1 bg-[#00000090] flex text-xs justify-around text-white items-center px-1.5 py-0.5 ">
                    <span>{videoCount}</span>
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

