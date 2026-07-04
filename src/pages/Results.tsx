import { useNavigate } from "react-router-dom";
import { BackIcon, FunnelIcon, MicrophoneIcon, SortIcon } from "../components/Icons";
import VideoCard from "../components/Cards/VideoCard";
import ChannelCard from "../components/Cards/ChannelCard";

export default function Results() {
    const navigate = useNavigate();

    return (
        <div className="overflow-hidden grid grid-rows-[56px_1fr]">
            <div className="flex gap-3 pb-3 pt-3 px-3">
                <button className="grid place-items-center cursor-pointer" onClick={() => window.history.state.idx ? navigate(-1) : navigate("/")}>
                    <BackIcon />
                </button>

                <input type="search" name="idk" id="" className="bg-(--dark-gray) placeholder:text-(--dark-silver) grow rounded-full px-4 py-1" placeholder="Search YouTube" defaultValue="fireship" />

                <button className="grid place-items-center">
                    <MicrophoneIcon />
                </button>
                <button className="grid place-items-center">
                    <FunnelIcon />
                </button>
            </div>

            <div className="overflow-auto no-scrollbar">
                {/* <div className="flex justify-between px-4 py-2">
                    <div>
                        <SortIcon />
                    </div>

                    <div>
                        <FunnelIcon />
                    </div>
                </div> */}

                <div className="space-y-6 pb-6">
                    <ChannelCard />
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    {/* <ChannelCard /> */}
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                </div>
            </div>
        </div>
    )
}