import { useNavigate } from "react-router";
import { FilledMusicIcon, FilledSubscriptionsIcon, MoreIcon } from "../Icons/Icons"


type VideoProps = {
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
export default function VideoCard({ isMusical = false, title, channel, profilePictureURL, thumbnailURL, views, uploadDate, duration }: VideoProps) {
    const navigate = useNavigate();

    return (
        <div className="select-none">
            <button aria-label={`Play ${title}`} className="relative" onClick={() => navigate("/video")}>
                <img src={thumbnailURL} alt="" />
                <div className="absolute  right-2 bottom-1 flex text-xs justify-between gap-1 text-white items-center ">
                    {isMusical &&
                        <span className="bg-[#00000090] h-5 w-5 rounded grid place-items-center">
                            <FilledMusicIcon size={12} />
                        </span>
                    }
                    <span className="bg-[#00000090] h-full px-1.5 py-0.5 rounded">{duration}</span>
                </div>
            </button>

            <div className="pt-2 gap-3 flex items-start ml-3 mr-1">
                <button aria-label={`Go to ${channel} channel`} className="shrink-0" onClick={() => navigate("/channel")}>
                    <img src={profilePictureURL} alt="channel" className="w-8 h-8 aspect-square rounded-full mt-2" />
                </button>

                <button aria-label={`Play ${title}`} className="gap-1 flex flex-col" onClick={() => navigate("/video")}>
                    <div className="text-left line-clamp-2">{title}</div>
                    <div className="text-xs text-left text-(--cool-gray)">
                        <span>{channel}</span> ·
                        <span> {views} views</span> ·
                        <span> {uploadDate}</span>
                    </div>
                </button>

                <button aria-label={`More options for ${title}`} className="shrink-0 px-1.5">
                    <MoreIcon size={20} />
                </button>
            </div>

        </div>
    )
}

