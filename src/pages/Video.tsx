import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LikeIcon, DislikeIcon, DownArrowIcon, CommentIcon, ShareIcon, BookmarkIcon, DownloadIcon, FlagIcon, CloseIcon } from "../components/Icons/Icons"
import VideoCard from "../components/Cards/VideoCard"
import VideoPlayer from "../components/Players/VideoPlayer"
import BottomSheet from "../components/Overlays/BottomSheet";
import { NavLink } from "react-router";
import Post from "../components/Cards/PostCard";
import Comment from "../components/Cards/CommentCard";
import CommentSection from "../components/Overlays/CommentSection";


export default function Video() {
    const [isCommentsBottomSheetOpen, setIsCommentsBottomSheetOpen] = useState(false);
    const [isDescriptionBottomSheetOpen, setIsDescriptionBottomSheetOpen] = useState(false);
    const DUMMY_VIEW_COUNT = "128K views";
    const DUMMY_UPLOAD_DATE = "2 days ago";
    const DUMMY_DESCRIPTION = "In this video we walk through building a custom video player from scratch...\n\nThanks for watching!";
    const DUMMY_HASHTAGS = ["#webdev", "#react", "#tutorial"];
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
            <main className="min-w-full">
                <div ref={videoPlayerRef} className="sticky top-0 z-1">
                    <VideoPlayer source="./videos/rickroll.mp4" title="What Does A Tiny Kitten Do When He Finds A Sleeping Golden Retriever Puppy" />
                </div>

                <button className="px-3 pt-3 pb-2 flex text-start select-text" onClick={() => setIsDescriptionBottomSheetOpen(!isDescriptionBottomSheetOpen)}>
                    <div className="text-lg/tight font-medium">
                        I Redesigned the ENTIRE YouTube UI from Scratch
                    </div>

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
                        <button className="font-medium text-(--eerie-black) bg-white grid place-items-center px-3 rounded-full text-[13px]">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="px-3 h-12 py-2 flex overflow-x-auto gap-3 no-scrollbar select-none mb-4 text-xs">
                    {/* Like and Dislike Buttons */}
                    <div className="flex items-center gap-2 px-3 bg-(--dark-gray) rounded-full">
                        <button className="flex gap-2 items-center">
                            <LikeIcon height={18} width={18} />
                            <div>129K</div>
                        </button>

                        <div className="w-px mx-1 h-4 bg-white/30"></div>

                        <button className="flex gap-2 items-center">
                            <DislikeIcon height={18} width={18} />
                            <div>2.3K</div>
                        </button>
                    </div>

                    {/* Comments Button */}
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center text-xs gap-2" onClick={() => setIsCommentsBottomSheetOpen(!isCommentsBottomSheetOpen)}>
                        {/* This was created by Gemini */}
                        <CommentIcon height={18} width={18} />
                        <div>3.1K</div>
                    </button>

                    {/* Share Button */}
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center gap-1">
                        <ShareIcon size={20} />
                        <div>Share</div>
                    </button>

                    {/* Save Button */}
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center gap-1">
                        <BookmarkIcon size={20} />
                        <div>Save</div>
                    </button>

                    {/* Download button */}
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center gap-1">
                        <DownloadIcon size={20} />
                        <div>Download</div>
                    </button>

                    {/* Report button */}
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center gap-1">
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

            </main>

            <BottomSheet type={2} overlay={false} isBottomSheetOpen={isCommentsBottomSheetOpen} height={"100svh"} middle={((window.innerHeight - videoPlayerHeight) / window.innerHeight) * 100} high={100} onBottomSheetClose={() => setIsCommentsBottomSheetOpen(false)}>
                {/* <Comment /> */}

                <CommentSection onClose={() => setIsCommentsBottomSheetOpen(false)} />
            </BottomSheet>



            {/* Description */}
            <BottomSheet type={2} overlay={false} isBottomSheetOpen={isDescriptionBottomSheetOpen} height={"100svh"} middle={((window.innerHeight - videoPlayerHeight) / window.innerHeight) * 100} high={100} onBottomSheetClose={() => setIsDescriptionBottomSheetOpen(false)}>
                <div className="w-full text-white overflow-y-auto h-full flex flex-col">
                    {/* Bottom Sheet Header / Drag Indicator */}
                    <div className="sticky bg-black top-0 z-10 border-b border-white/20 px-4 pb-3 flex items-center justify-between">
                        <span className="text-lg font-bold text-white">Description</span>
                        <button onClick={() => setIsDescriptionBottomSheetOpen(false)}>
                            <CloseIcon />
                        </button>
                    </div>

                    <div className="p-4 space-y-4">
                        {/* Video Title */}
                        <h1 className="font-semibold leading-snug text-white">
                            Building a YouTube Mobile Description Sheet with Tailwind CSS and React
                        </h1>

                        {/* Stats Bar */}
                        <div className="flex items-center justify-around py-3 bg-(--dark-gray) rounded-lg text-center">
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-white">124K</span>
                                <span className="text-[11px] text-gray-400">Likes</span>
                            </div>

                            <div className="h-6 w-px bg-white/10" />

                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-white">1.2M</span>
                                <span className="text-[11px] text-gray-400">Views</span>
                            </div>

                            <div className="h-6 w-px bg-white/10" />

                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-white">30 Aug</span>
                                <span className="text-[11px] text-gray-400">2022</span>
                            </div>
                        </div>


                        {/* Main Content Body */}
                        <div className="bg-[#272727] p-3.5 rounded-md space-y-4 text-sm text-gray-200 leading-relaxed whitespace-pre-line">
                            I tried to redesign YouTube's UI and make it more user-friendly.{"\n\n"}
                            Hope you enjoy!{"\n\n"}
        // Resources:{"\n"}
                            YouTube Redesign Figma File: <a href="https://www.figma.com/community/file/..." target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://www.figma.com/community/file/...</a>{"\n"}
                            The Game Theorists Video about YouTube Shorts: <a href="#" className="text-blue-400 hover:underline">• Game Theory: Why Everyone HATES YouTube Sh...</a>{"\n"}
                            YTCH: <a href="https://ytch.xyz" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://ytch.xyz</a>{"\n\n"}
        // My Links:{"\n"}
                            everything I ever design is available for free! consider supporting the channel: <a href="https://ko-fi.com/juxtopposedme" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://ko-fi.com/juxtopposedme</a>{"\n"}
                            follow me: <a href="https://x.com/juxtopposed" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://x.com/juxtopposed</a>{"\n"}
                            visit my site: <a href="https://juxtopposed.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://juxtopposed.com</a>{"\n"}
                            check out my code: <a href="https://codepen.com/juxtopposed" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://codepen.com/juxtopposed</a>{"\n"}
                            check out my design: <a href="https://figma.com/@juxtopposed" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://figma.com/@juxtopposed</a>{"\n"}
                            share any design ideas or requests with me: <a href="https://forms.gle/7rPVdhcQFQGsKWhn7" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://forms.gle/7rPVdhcQFQGsKWhn7</a>{"\n\n"}
                            ------{"\n\n"}
        // Timestamps:{"\n"}
                            <span className="text-blue-400 cursor-pointer">00:00</span> Intro{"\n"}
                            <span className="text-blue-400 cursor-pointer">00:39</span> Branding{"\n"}
                            <span className="text-blue-400 cursor-pointer">01:37</span> Layout{"\n"}
                            <span className="text-blue-400 cursor-pointer">03:33</span> Explore{"\n"}
                            <span className="text-blue-400 cursor-pointer">04:10</span> Home{"\n"}
                            <span className="text-blue-400 cursor-pointer">05:34</span> Video{"\n"}
                            <span className="text-blue-400 cursor-pointer">11:49</span> Channel{"\n"}
                            <span className="text-blue-400 cursor-pointer">13:24</span> Subs{"\n"}
                            <span className="text-blue-400 cursor-pointer">14:27</span> Library{"\n"}
                            <span className="text-blue-400 cursor-pointer">15:49</span> Sharing{"\n"}
                            <span className="text-blue-400 cursor-pointer">16:31</span> Shorts{"\n"}
                            <span className="text-blue-400 cursor-pointer">17:03</span> Search{"\n"}
                            <span className="text-blue-400 cursor-pointer">17:55</span> Bonus stuff{"\n\n"}
                            ------{"\n\n"}
        // My fav products:{"\n"}
                            The largest library of design inspo I can't live without: <a href="https://mobbin.com/?via=juxtopposed" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://mobbin.com/?via=juxtopposed</a>{"\n"}
                            For affordable web hosting: <a href="https://www.hostg.xyz/SHGzx" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://www.hostg.xyz/SHGzx</a>{"\n\n"}
                            (if you need any of these products and want to support the channel, you can use my affiliate links above. I may earn a commission at no extra cost to you. win-win!){"\n\n"}
                            -------{"\n"}
        // Music (support the artists):{"\n"}
                            <a href="https://pixabay.com/users/juliush-392..." target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://pixabay.com/users/juliush-392...</a>{"\n"}
                            <a href="https://pixabay.com/users/savagegraph..." target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://pixabay.com/users/savagegraph...</a>{"\n\n"}
                            <span className="text-blue-400 cursor-pointer">#youtube</span> <span className="text-blue-400 cursor-pointer">#redesign</span>
                        </div>
                    </div>
                </div>
            </BottomSheet>
        </>
    )
}