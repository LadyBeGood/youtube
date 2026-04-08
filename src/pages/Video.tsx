import { useRef, useState, type MouseEvent, type RefObject } from "react";
import { LikeIcon, DislikeIcon } from "../components/Icons"
import VideoCard from "../components/VideoCard"
import VideoPlayer from "../components/VideoPlayer"

const Video = () => {

    return (
        <>
            <div className="min-w-full">
                <VideoPlayer source="./dog.mp4" title="What Does A Tiny Kitten Do When He Finds A Sleeping Golden Retriever Puppy" />

                <div className="px-3">
                    <div className="font-semibold text-lg/tight whitespace-nowrap overflow-hidden pt-3 pb-2 text-ellipsis">
                        What Does A Tiny Kitten Do When He Finds A Sleeping Golden Retriever Puppy
                    </div>
                    <div className="text-xs whitespace-pre pb-[3px]  text-white/60">
                        <span className="font-medium">@LaffeyandAmy</span>  9.6M Views  8mo ago  #puppy  <span className="text-white font-medium">...more</span>
                    </div>
                </div>

                {/* Channel Details */}
                <div className="px-3 py-2 flex overflow-x-auto gap-2 no-scrollbar">
                    <div className="shrink-0">
                        <img className="rounded-full" src="./avatar1.webp" alt="channel" height="34px" width="34px" />
                    </div>
                    <div className="font-medium text-eerie-black bg-white grid place-items-center px-3 rounded-full text-[12px]">
                        Subscribe
                    </div>

                    <div className="flex items-center gap-2 px-3 bg-dark-gray rounded-full">
                        <LikeIcon height={18} width={18} />
                        <div className="text-[12px] font-medium">129K</div>
                        <div className="w-0.25 mx-1 h-4 bg-white/30"></div>
                        <DislikeIcon height={18} width={18} />
                    </div>

                    <div className="px-3 bg-dark-gray rounded-full flex items-center text-[12px] gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"></path></svg>
                        <div>Share</div>
                    </div>

                    <div className="px-3 bg-dark-gray rounded-full flex items-center text-[12px] gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"></path></svg>
                        <div>Save</div>
                    </div>

                    <div className="px-3 bg-dark-gray rounded-full flex items-center text-[12px] gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 -960 960 960" fill="#fff"><path d="M200-160v-40h560v40H200Zm280-147.69L307.69-480 336-508.31l124 124V-800h40v415.69l124-124L652.31-480 480-307.69Z" /></svg>
                        <div>Download</div>
                    </div>
                    <div className="px-3 bg-dark-gray rounded-full flex items-center text-[12px] gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M6 20.5V5h7.192l.4 2H19v8h-5.192l-.4-2H7v7.5zm8.65-6.5H18V8h-5.25l-.4-2H7v6h7.25z"></path></svg>
                        <div>Report</div>
                    </div>

                </div>

                <div className="bg-dark-gray mt-2 mb-4 mx-3 py-2.5 px-3 rounded-xl">
                    <div className="flex gap-2 items-baseline mb-2">
                        <div className="font-medium text-sm">Comments</div>
                        <div className="text-white/60 text-[12px]">3.1K</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div>
                            <img className="rounded-full" src="./avatar1.webp" alt="channel" height="26px" width="26px" />
                        </div>
                        <div className="text-[12px]">Thank you for not adding some stupid music/song to it.</div>
                    </div>
                </div>

                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"4:17:17"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"4:17:17"} />
                <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"4:17:17"} />

            </div>


        </>
    )
}
export default Video