import { useNavigate } from "react-router-dom";
import { MoreIcon } from "./Icons"


type VideoParams = {
    isMusical?: boolean;
    title: string;
    views: string;
    uploadDate: string;
    thumbnailURL: string;
    duration: string;
}
export default function VideoCard({ isMusical = false, title, thumbnailURL, views, uploadDate, duration }: VideoParams) {
    const navigate = useNavigate();

    return (
        <button className="select-none flex gap-2 pr-1 h-22" onClick={() => navigate("/video")}>
            <div className="relative aspect-video h-full overflow-hidden shrink-0 grid place-items-center">
                <img className="h-full w-auto" src={thumbnailURL} alt="thumbnail" />
                <div className="absolute rounded right-1 bottom-1 bg-black/70 flex text-[10px] justify-around text-white items-center px-1.5 py-0.5 ">
                    {isMusical &&
                        <span className="material-symbols-outlined" style={{ fontSize: "12px", fontVariationSettings: `"FILL" 1, "wght" 400,"GRAD" 0` }}>music_note</span>
                    }
                    <span>{duration}</span>
                </div>
            </div>

            <div className="">
                <div className="gap-1 flex flex-col">
                    <div className="text-left text-sm line-clamp-3">{title}</div>
                    
                    <div className="text-xs text-left text-cool-gray">
                        <span> {views} views</span> ·
                        <span> {uploadDate}</span>
                    </div>
                </div>
            </div>

            <MoreIcon className="shrink-0" size={20}/>
        </button>
    )
}

