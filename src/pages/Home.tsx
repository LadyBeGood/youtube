
import { useState } from "react";
import Post from "../components/Post"
import RecommendationsBar from "../components/RecommendationsBar"
import ShortsCard from "../components/ShortsCard"
import VideoCard from "../components/VideoCard"
import BottomSheet from "../components/BottomSheet";
import ExploreMenu from "../components/ExploreMenu";
import PlaylistCard from "../components/PlaylistCard";



export default function Home() {
    const [activeVideo, setActiveVideo] = useState<any | undefined>(undefined);
    const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);

    return (
        <>
            <div className="overflow-y-auto no-scrollbar">
                <RecommendationsBar isHomePage={true} onExploreButtonClick={() => setIsExploreMenuOpen(!isExploreMenuOpen)} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <PlaylistCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} updatedAt={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} videoCount={47} />
                <div className="mt-3 mb-6 flex flex-col gap-6">
                    <ShortsCard thumbnail="./japan.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                    <ShortsCard thumbnail="./pink.webp" title="A rich red bean paste and butter honey toast that gives you maximum guilty pleasure 🍞🧈" />
                    <ShortsCard thumbnail="./painting.jpg" title="SUBLIMAL MSG" />
                </div>
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            </div>

            <BottomSheet
                middle={100}
                isBottomSheetOpen={!!activeVideo} // Opens if activeVideo is not null
                onBottomSheetClose={() => setActiveVideo(null)}
            >
                <div className="p-4">
                    <p className="font-bold text-sm border-b pb-2">Options for: {activeVideo?.title}</p>
                    <button className="w-full text-left py-2">Save to playlist</button>
                    <button className="w-full text-left py-2 text-red-500">Report</button>
                </div>
            </BottomSheet>

            <ExploreMenu isOpen={isExploreMenuOpen} onClose={() => setIsExploreMenuOpen(!setIsExploreMenuOpen)} />
        </>
    )
}
