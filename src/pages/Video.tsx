import { useRef, useState, type MouseEvent, type RefObject } from "react";
import { LikeIcon, DislikeIcon } from "../components/Icons"
import VideoCard from "../components/VideoCard"
import VideoPlayer from "../components/VideoPlayer"

const Video = () => {

    return (
        <>
            <div className="min-w-full">
                <VideoPlayer source="./dog.mp4" title="What Does A Tiny Kitten Do When He Finds A Sleeping Golden Retriever Puppy" />

                <div className="px-3 pt-3 pb-2">
                    <div className="text-lg/tight font-medium">
                        What Does A Tiny Kitten Do When He Finds A Sleeping Golden Retriever Puppy
                    </div>
                    {/* <div className="text-[12px] whitespace-pre py-1 text-white/60">
                        270K views  •  3 days ago  •  Config 2026  
                    </div> */}
                </div>

                {/* Channel Details */}
                <div className="px-3 h-12 py-2 flex justify-between gap-2 no-scrollbar">
                    <div className="shrink-0 flex items-center gap-3">
                        <img className="rounded-full select-none" src="./avatar.webp" alt="channel" height="32px" width="32px" />
                        <span className="font-medium text-sm">Figma</span>
                        <span className="text-[12px] opacity-80 select-none">62.4K</span>
                    </div>

                    <div className="flex gap-2">
                        <button className="font-medium hover:bg-white/20 text-white grid place-items-center px-3 rounded-full text-[13px]">
                            Join
                        </button>
                        <button className="font-medium text-eerie-black bg-white grid place-items-center px-3 rounded-full text-[13px]">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="px-3 h-12 py-2 flex overflow-x-auto gap-3 no-scrollbar select-none mb-2">
                    {/* Like and Dislike Buttons */}
                    <div className="flex items-center gap-2 px-3 bg-dark-gray rounded-full">
                        <button className="flex gap-2">
                            <LikeIcon height={18} width={18} />
                            <div className="text-[12px] font-medium">129K</div>
                        </button>

                        <div className="w-0.25 mx-1 h-4 bg-white/30"></div>

                        <button className="flex gap-2">
                            <DislikeIcon height={18} width={18} />
                            <div className="text-[12px] font-medium">2.3K</div>
                        </button>
                    </div>

                    {/* Comments Button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center text-[12px] gap-2">
                        {/* This was created by Gemini */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="square" stroke-linejoin="miter">
                            <path d="M21 11c0 4.418-4.03 8-9 8a9.4 9.4 0 0 1-3.5-.6L3 21l1.5-4.5C3.5 15.2 3 13.2 3 11c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
                        </svg>
                        <div className="font-medium">3.1K</div>
                    </button>

                    {/* Share Button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center text-[12px] gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"></path></svg>
                        <div>Share</div>
                    </button>

                    {/* Save Button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center text-[12px] gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"></path></svg>
                        <div>Save</div>
                    </button>

                    {/* Download button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center text-[12px] gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 -960 960 960" fill="#fff"><path d="M200-160v-40h560v40H200Zm280-147.69L307.69-480 336-508.31l124 124V-800h40v415.69l124-124L652.31-480 480-307.69Z" /></svg>
                        <div>Download</div>
                    </button>

                    {/* Report button */}
                    <button className="pl-3 pr-4 bg-dark-gray rounded-full flex items-center text-[12px] gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M6 20.5V5h7.192l.4 2H19v8h-5.192l-.4-2H7v7.5zm8.65-6.5H18V8h-5.25l-.4-2H7v6h7.25z"></path></svg>
                        <div>Report</div>
                    </button>
                </div>

                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"4:17:17"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"4:17:17"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"4:17:17"} />

            </div>


        </>
    )
}
export default Video