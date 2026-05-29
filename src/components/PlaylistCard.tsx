import { useNavigate } from "react-router-dom";
import { MoreIcon, FilledVideoIcon } from "./Icons";


type PlaylistCardParams = {
    title: string;
    videoCount: number;
    updatedAt: string;
    thumbnailURL: string;
};

export default function PlaylistCard({ title, videoCount, updatedAt, thumbnailURL }: PlaylistCardParams) {

    return (
        <div className="select-none flex gap-2 pr-1 h-22 mt-2">
            <div className="relative aspect-video h-full shrink-0 grid place-items-center before:absolute before:w-[90%] before:h-1 before:bg-white/50 before:-top-1 after:absolute after:w-[75%] after:h-1 after:bg-white/30 after:-top-2">
                <div className="w-full h-full overflow-hidden grid place-items-center">
                    <img className="h-full w-full object-cover" src={thumbnailURL} alt="thumbnail" />
                </div>
                {/* <img className="h-full w-auto" src={thumbnailURL} alt="thumbnail" /> */}
                
                <div className="absolute flex gap-1 rounded right-0.75 bottom-0.75 bg-black/70 text-xs text-white pl-0.75 pr-1 py-[1px] items-center">
                    <FilledVideoIcon size={14}/> {videoCount}
                </div>
            </div>

            <div className="">
                <div className="gap-1 flex flex-col">
                    <div className="text-left text-sm line-clamp-3">{title}</div>

                    <div className="text-xs text-left text-cool-gray">
                        Updated <span> {updatedAt}</span>
                    </div>
                </div>
            </div>

            <MoreIcon className="shrink-0" size={20} />
        </div>
    )
}