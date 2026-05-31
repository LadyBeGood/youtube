import { Link } from "react-router-dom"
import { FilledVideoIcon, MoreIcon, VideoIcon } from "./Icons"

type PlaylistCardProps = {
    title: string,
    channel: string,
    profilePictureURL: string,
    videoCount: number,
    updatedAt: string,
    thumbnailURL: string,
}

export default function PlaylistCard({ title, channel, profilePictureURL, videoCount, updatedAt, thumbnailURL }: PlaylistCardProps) {
    return (
        <div className="select-none mt-3">
            <Link
                to="/playlist"
                // 1. Pass the thumbnail URL as a CSS variable
                style={{ '--playlist-thumb': `url(${thumbnailURL})` } as React.CSSProperties}
                // 2. Use that variable inside the pseudo-elements. 
                // We use bg-[image:var(--playlist-thumb)] and align it to the top, then dim/blur it.
                className="relative aspect-video h-full shrink-0 grid place-items-center before:absolute before:w-[90%] before:h-1.5 before:-top-1.5 before:bg-[image:var(--playlist-thumb)] before:bg-cover before:bg-top before:brightness-75 before:opacity-80 after:absolute after:w-[77.5%] after:h-1.5 after:-top-3 after:bg-[image:var(--playlist-thumb)] after:bg-cover after:bg-top after:brightness-50 after:opacity-60"
            >
                <div className="w-full h-full overflow-hidden grid place-items-center">
                    <img className="h-full w-full object-cover" src={thumbnailURL} alt="thumbnail" />
                </div>

                <div className="absolute flex gap-1 rounded right-2 bottom-1 bg-black/70 text-xs text-white py-0.5 px-1.5 items-center">
                    {videoCount} videos
                </div>
            </Link>

            <div className="py-2 gap-3 pb-5 flex items-start ml-3 mr-1">
                <Link className="shrink-0" to="/channel">
                    <img src={profilePictureURL} alt="channel" className="w-8 h-8 aspect-square rounded-full mt-2" />
                </Link>

                <Link className="gap-1 flex flex-col" to="/video">
                    <div className="text-left">{title}</div>
                    <div className="text-xs text-left text-cool-gray">
                        <span>{channel}</span> ·
                        <span> Updated {updatedAt}</span>
                    </div>
                </Link>

                <button className="shrink-0 px-1.5">
                    <MoreIcon size={20} />
                </button>
            </div>

        </div>
    )
}