import { Link, useNavigate } from "react-router-dom";
import { MoreIcon, FilledVideoIcon } from "../Icons";


type ThinPlaylistCardProps = {
    title: string;
    videoCount: number;
    updatedAt: string;
    thumbnailURL: string;
};

export default function ThinPlaylistCard({ title, videoCount, updatedAt, thumbnailURL }: ThinPlaylistCardProps) {

    return (
        <div className="select-none flex gap-2 pr-1 h-22 mt-2">
            <Link
                to="/playlist"
                // Pass the thumbnail URL as a CSS variable
                style={{ '--playlist-thumb': `url(${thumbnailURL})` } as React.CSSProperties}
                // Use that variable inside the pseudo-elements. 
                // We use bg-[image:var(--playlist-thumb)] and align it to the top, then dim/blur it.
                className="relative aspect-video h-full shrink-0 grid place-items-center before:absolute before:w-[90%] before:h-1 before:-top-1 before:bg-[image:var(--playlist-thumb)] before:bg-cover before:bg-top before:brightness-75 before:opacity-80 after:absolute after:w-[77.5%] after:h-1 after:-top-2 after:bg-[image:var(--playlist-thumb)] after:bg-cover after:bg-top after:brightness-50 after:opacity-60"
            >

                <div className="w-full h-full overflow-hidden grid place-items-center">
                    <img className="h-full w-full object-cover" src={thumbnailURL} alt="thumbnail" />
                </div>

                <div className="absolute flex gap-1 rounded right-0.75 bottom-0.75 bg-black/70 text-xs text-white pl-0.75 pr-1 py-[1px] items-center">
                    <FilledVideoIcon size={14} /> {videoCount}
                </div>
            </Link>

            <div className="">
                <div className="gap-1 flex flex-col">
                    <div className="text-left text-sm line-clamp-3">{title}</div>

                    <div className="text-xs text-left text-(--cool-gray)">
                        Updated <span> {updatedAt}</span>
                    </div>
                </div>
            </div>

            <MoreIcon className="shrink-0" size={20} />
        </div>
    )
}