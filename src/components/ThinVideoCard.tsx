import { useNavigate } from "react-router-dom";
import { MoreIcon } from "./Icons"


type ThinVideoProps = {
    isMusical?: boolean;
    title: string;
    views: string;
    uploadDate: string;
    thumbnailURL: string;
    duration: string;
}
export default function ThinVideoCard({ isMusical = false, title, thumbnailURL, views, uploadDate, duration }: ThinVideoProps) {
    const navigate = useNavigate();

    return (
        <button className="select-none flex gap-2 pr-1 h-22" onClick={() => navigate("/video")}>
            <div className="relative aspect-video h-full overflow-hidden shrink-0 grid place-items-center">
                <img className="h-full w-auto" src={thumbnailURL} alt="thumbnail" />
                <div className="absolute rounded right-0.75 bottom-0.75 bg-black/70 text-xs justify-around text-white px-1 py-[1px]">
                    {duration}
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

            <MoreIcon className="shrink-0" size={20} />
        </button>
    )
}

