import { Link } from "react-router-dom";
import { FilledSubscriptionsIcon, FilledVideoIcon, MoreIcon } from "./Icons"


type SmallPlaylistCardProps = {
    title: string;
    channel: string;
    thumbnailURL: string;
    videoCount: number;
}

export default function SmallPlaylistCard({ title, channel, thumbnailURL, videoCount }: SmallPlaylistCardProps) {

    return (
        <div className="select-none shrink-0 w-48 mt-2">
            <Link
                to="/playlist"
                className="relative aspect-video w-full shrink-0 grid place-items-center before:absolute before:w-[90%] before:h-1 before:-top-1 before:bg-gray-500 after:absolute after:w-[77.5%] after:h-1 after:-top-2 after:bg-gray-700"
            >

                {/* <div className="w-full h-auto overflow-hidden grid place-items-center"> */}
                    <img className="w-full aspect-video object-cover" src={thumbnailURL} alt="thumbnail" />
                {/* </div> */}

                <div className="absolute flex gap-1 rounded right-0.75 bottom-0.75 bg-black/70 text-xs text-white pl-0.75 pr-1 py-[1px] items-center">
                    <FilledVideoIcon size={14} /> {videoCount}
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

