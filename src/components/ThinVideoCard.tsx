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
        <button className="select-none flex" onClick={() => navigate("/video")}>
            <div className="relative w-[50svw]">
                <img className="select-none" src={thumbnailURL} alt="thumbnail" />
                <div className="absolute rounded right-2 bottom-1 bg-[#00000090] flex text-[10px] justify-around text-white items-center px-1.5 py-0.5 ">
                    {isMusical &&
                        <span className="material-symbols-outlined" style={{ fontSize: "12px", fontVariationSettings: `"FILL" 1, "wght" 400,"GRAD" 0` }}>music_note</span>
                    }
                    <span>{duration}</span>
                </div>
            </div>
            <div className="py-2 px-1 gap-3 pb-5 flex items-start">
                <div className="gap-1 flex flex-col">
                    <div className="text-left">{title}</div>
                    <div className="text-xs text-left text-cool-gray">
                        <span> {views} views</span> ·
                        <span> {uploadDate}</span>
                    </div>
                </div>
                <MoreIcon />
            </div>
        </button>
    )
}

