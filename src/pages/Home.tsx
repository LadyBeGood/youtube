
import { useState } from "react";
import Post from "../components/Cards/PostCard"
import RecommendationsBar from "../components/Navigation/RecommendationsBar"
import ShortsCard from "../components/Cards/ShortsCard"
import VideoCard from "../components/Cards/VideoCard"
import BottomSheet from "../components/Overlays/BottomSheet";
import ExploreMenu from "../components/Overlays/ExploreMenu";
import PlaylistCard from "../components/Cards/PlaylistCard";
import { videos } from "../database/videos";



export default function Home() {
    const [activeVideo, setActiveVideo] = useState<any | undefined>(undefined);
    const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);

    return (
        <>
            {/* <main className="overflow-y-auto no-scrollbar lg:hidden"> */}
            <main className="overflow-y-auto no-scrollbar">
                <RecommendationsBar isHomePage={true} onExploreButtonClick={() => setIsExploreMenuOpen(!isExploreMenuOpen)} />

                {/* <div className="space-y-6 pb-6 lg:grid lg:grid-cols-3"> */}
                <div className="space-y-6 pb-6">
                    {videos.map((video, index) => 
                        <>
                            <VideoCard key={video.id} isMusical={video.isMusical} title={video.title} channel={video.channel} profilePictureURL={video.profilePictureURL} views={video.views} uploadDate={video.uploadDate} thumbnailURL={video.thumbnailURL} duration={video.duration} />
                            {index === 0 && 
                                <>
                                    <ShortsCard thumbnail="./japan.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                                    <ShortsCard thumbnail="./pink.webp" title="A rich red bean paste and butter honey toast that gives you maximum guilty pleasure 🍞🧈" />
                                    <ShortsCard thumbnail="./painting.jpg" title="SUBLIMAL MSG" />
                                </>
                            }
                        </>
                    )}

                    {videos.map(video => 
                        <VideoCard key={video.id} isMusical={video.isMusical} title={video.title} channel={video.channel} profilePictureURL={video.profilePictureURL} views={video.views} uploadDate={video.uploadDate} thumbnailURL={video.thumbnailURL} duration={video.duration} />
                    )}
                </div>
            </main>

            {/* <main className="hidden lg:block overflow-y-auto no-scrollbar"> */}
            <main className="hidden overflow-y-auto no-scrollbar">
                <RecommendationsBar isHomePage={true} onExploreButtonClick={() => setIsExploreMenuOpen(!isExploreMenuOpen)} />

                {/* <div className="space-y-6 pb-6 lg:grid lg:grid-cols-3 gap-4 px-4"> */}
                <div className="space-y-6 pb-6 gap-4 px-4">
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                    {/* <PlaylistCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} updatedAt={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} videoCount={47} /> */}
                    <ShortsCard thumbnail="./japan.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                    <ShortsCard thumbnail="./pink.webp" title="A rich red bean paste and butter honey toast that gives you maximum guilty pleasure 🍞🧈" />
                    <ShortsCard thumbnail="./painting.jpg" title="SUBLIMAL MSG" />
                    
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
            </main>

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
