import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LikeIcon, DislikeIcon, DownArrowIcon, CommentIcon, ShareIcon, BookmarkIcon, DownloadIcon, FlagIcon } from "../components/Icons"
import VideoCard from "../components/VideoCard"
import VideoPlayer from "../components/VideoPlayer"
import BottomSheet from "../components/BottomSheet";
import { NavLink } from "react-router-dom";
import Post from "../components/Post";
import Comment from "../components/Comment";


export default function Video() {
    const [isCommentsBottomSheetOpen, setIsCommentsBottomSheetOpen] = useState(false);
    const [isDescriptionBottomSheetOpen, setIsDescriptionBottomSheetOpen] = useState(false);

    const videoPlayerRef = useRef<HTMLDivElement>(null);
    const [videoPlayerHeight, setVideoPlayerHeight] = useState(0);

    useEffect(() => {
        if (!videoPlayerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            setVideoPlayerHeight(entries[0].contentRect.height);
        });

        observer.observe(videoPlayerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="min-w-full">
                <div ref={videoPlayerRef} className="sticky top-0 z-1">
                    <VideoPlayer source="./dog.mp4" title="What Does A Tiny Kitten Do When He Finds A Sleeping Golden Retriever Puppy" />
                </div>

                <button className="px-3 pt-3 pb-2 flex text-start select-text" onClick={() => setIsDescriptionBottomSheetOpen(!isDescriptionBottomSheetOpen)}>
                    <div className="text-lg/tight font-medium">
                        I Redesigned the ENTIRE YouTube UI from Scratch
                    </div>
                    {/* <div className="text-[12px] whitespace-pre py-1 text-white/60">
                        270K views  •  3 days ago 
                    </div> */}
                    <div>
                        <DownArrowIcon />
                    </div>
                </button>

                {/* Channel Details */}
                <div className="px-3 h-12 py-2 flex justify-between gap-2 no-scrollbar">
                    <NavLink to="/channel" className="shrink-0 flex items-center gap-3 select-text" >
                        <img className="rounded-full select-none" src="./avatar.webp" alt="channel" height="32px" width="32px" />
                        <span className="font-medium text-sm">Figma</span>
                        {/* This text is smaller than Channel name, hence requires to be translated a few pixels to align to baseline */}
                        {/* <span className="text-[12px] opacity-80 select-none translate-y-[1.5px]">62.4K</span> */}
                    </NavLink>

                    <div className="flex gap-2">
                        <button className="font-medium hover:bg-white/20 text-white grid place-items-center px-3 rounded-full text-[13px]">
                            Join
                        </button>
                        <button className="font-medium text-eerie-black bg-white grid place-items-center px-3 rounded-full text-[13px]">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="px-3 h-12 py-2 flex overflow-x-auto gap-3 no-scrollbar select-none mb-4 text-xs">
                    {/* Like and Dislike Buttons */}
                    <div className="flex items-center gap-2 px-3 bg-dark-gray rounded-full">
                        <button className="flex gap-2 items-center">
                            <LikeIcon height={18} width={18} />
                            <div>129K</div>
                        </button>

                        <div className="w-0.25 mx-1 h-4 bg-white/30"></div>

                        <button className="flex gap-2 items-center">
                            <DislikeIcon height={18} width={18} />
                            <div>2.3K</div>
                        </button>
                    </div>

                    {/* Comments Button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center text-xs gap-2" onClick={() => setIsCommentsBottomSheetOpen(!isCommentsBottomSheetOpen)}>
                        {/* This was created by Gemini */}
                        <CommentIcon height={18} width={18} />
                        <div>3.1K</div>
                    </button>

                    {/* Share Button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center gap-1">
                        <ShareIcon size={20} />
                        <div>Share</div>
                    </button>

                    {/* Save Button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center gap-1">
                        <BookmarkIcon size={20} />
                        <div>Save</div>
                    </button>

                    {/* Download button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center gap-1">
                        <DownloadIcon size={20} />
                        <div>Download</div>
                    </button>

                    {/* Report button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center gap-1">
                        <FlagIcon size={20} />
                        <div>Report</div>
                    </button>
                </div>


                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
                <Post className="mb-6 mt-4" {...{
                    id: 2,
                    avatar: "./avatar1.webp", name: "Michael Faraday", date: "1 week ago",
                    body: "Hot take: most people fundamentally misunderstand what electricity actually is. It's not electrons flowing like water in a pipe. Thread incoming.",
                    likes: "5.1K", dislikes: "24", comments: "412",
                }} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />

            </div>

            <BottomSheet type={2} overlay={false} isBottomSheetOpen={isCommentsBottomSheetOpen} height={"100svh"} middle={((window.innerHeight - videoPlayerHeight) / window.innerHeight) * 100} high={100} onBottomSheetClose={() => setIsCommentsBottomSheetOpen(false)}>
                <Comment />
                
            </BottomSheet>

            {/* <BottomSheet type={2} overlay={false} isBottomSheetOpen={isCommentsBottomSheetOpen} height={"80px"} middle={((window.innerHeight - videoPlayerHeight) / window.innerHeight) * 100} high={100} onBottomSheetClose={() => setIsCommentsBottomSheetOpen(false)}>
                aaaa
            </BottomSheet> */}
            

            {/* Description */}
            <BottomSheet type={2} overlay={false} isBottomSheetOpen={isDescriptionBottomSheetOpen} height={"100svh"} middle={((window.innerHeight - videoPlayerHeight) / window.innerHeight) * 100} high={100} onBottomSheetClose={() => setIsDescriptionBottomSheetOpen(false)}>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
                <div>TODO</div>
            </BottomSheet >
        </>
    )
}