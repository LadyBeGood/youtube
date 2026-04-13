import { useNavigate } from "react-router-dom";
import { MoreIcon } from "./Icons"


type VideoParams = {
    isMusical?: boolean;
    title: string;
    channel: string;
    profilePictureURL: string;
    views: string;
    uploadDate: string;
    thumbnailURL: string;
    duration: string;
    // onClick: () => void;
}
export default function VideoCard({ isMusical = false, title, channel, profilePictureURL, thumbnailURL, views, uploadDate, duration }: VideoParams) {
    const navigate = useNavigate();

    return (
        <div className="select-none">
            <button className="relative" onClick={() => navigate("/video")}>
                <img src={thumbnailURL} alt="thumbnail" />
                <div className="absolute rounded right-2 bottom-1 bg-[#00000090] flex text-[10px] justify-around text-white items-center px-1.5 py-0.5 ">
                    {isMusical &&
                        <span className="material-symbols-outlined" style={{ fontSize: "12px", fontVariationSettings: `"FILL" 1, "wght" 400,"GRAD" 0` }}>music_note</span>
                    }
                    <span>{duration}</span>
                </div>
            </button>

            <div className="py-2 gap-3 pb-5 flex items-start ml-3 mr-1.5">
                <button className="shrink-0" onClick={() => navigate("/channel")}>
                    <img src={profilePictureURL} alt="channel" className="w-8 h-8 aspect-square rounded-full mt-2" />
                </button> 
                
                <button className="gap-1 flex flex-col" onClick={() => navigate("/video")}>
                    <div className="text-left">{title}</div>
                    <div className="text-xs text-left text-cool-gray">
                        <span>{channel}</span> ·
                        <span> {views} views</span> ·
                        <span> {uploadDate}</span>
                    </div>
                </button>

                <button className="shrink-0 p-1.5">
                    <MoreIcon size={20} />
                </button>
            </div>

        </div>
    )
}

