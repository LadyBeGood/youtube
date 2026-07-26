import { useState } from "react";
import SmallVideoCard from "../components/Cards/SmallVideoCard";
import { AddIcon, BackIcon, BookmarkIcon, CommentIcon, DislikeIcon, DownArrowIcon, DownloadIcon, FlagIcon, LeaderboardIcon, LikeIcon, MaskIcon, FilledNextIcon, ProfileIcon, ShareIcon } from "../components/Icons/Icons";
import SmallPlaylistCard from "../components/Cards/SmallPlaylistCard";
import { Link } from "react-router-dom";





export default function Profile() {
    return (
        <main className="py-4 w-full overflow-x-hidden space-y-8 no-scrollbar">
            <div className="mb-0">
                <div className="flex items-center mb-3">
                    <div className="ml-3">
                        <img src="./avatar3.jpg" className="rounded-full h-20 w-20" alt="" />
                    </div>

                    {/* Channel Info Section */}
                    <div className="px-4">
                        <span className="text-lg font-bold text-white flex gap-1 items-center">
                            Michael Faraday <DownArrowIcon />
                        </span>

                        <div className="text-sm whitespace-pre text-(--cool-gray)">
                            @michaelfaraday
                        </div>
                    </div>
                </div>

                <div className="px-3 h-12 py-2 flex overflow-x-auto gap-3 no-scrollbar select-none mb-4 text-xs">
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center text-xs gap-2 shrink-0">
                        {/* This was created by Gemini */}
                        <ProfileIcon size={20} />
                        <div className="shrink-0">View Channel</div>
                    </button>

                    {/* Download button */}
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center gap-2 shrink-0">
                        <DownloadIcon size={20} />
                        <div>Downloads</div>
                    </button>

                    {/* Download button */}
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center gap-2 shrink-0">
                        <MaskIcon size={20} />
                        <div>Incognito</div>
                    </button>

                    {/* Report button */}
                    <button className="pl-3 pr-4 bg-(--dark-gray) rounded-full flex items-center gap-2">
                        <LeaderboardIcon size={20} />
                        <div>Statistics</div>
                    </button>
                </div>
            </div>


            <div className="w-full">
                <div className="flex justify-between px-3 mb-4">
                    <span className="font-medium text-lg">History</span>
                    <DownArrowIcon className="-rotate-90" size={28} />
                </div>

                <div className="flex overflow-x-auto no-scrollbar w-full px-3 gap-3">
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./yellow.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./japan.jpg"} duration={"9:38"} />
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between px-3 mb-4">
                    <span className="font-medium text-lg">Watch Later</span>
                    <DownArrowIcon className="-rotate-90" size={28} />
                </div>

                <div className="flex overflow-x-auto no-scrollbar w-full px-3 gap-3">
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between px-3 mb-4">
                    <span className="font-medium text-lg">Liked Videos</span>
                    <DownArrowIcon className="-rotate-90" size={28} />
                </div>

                <div className="flex overflow-x-auto no-scrollbar w-full px-3 gap-3">
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between px-3 mb-4">
                    <span className="font-medium text-lg">Playlists</span>

                    <div className="flex gap-6">
                        <AddIcon size={28} />
                        <DownArrowIcon className="-rotate-90" size={28} />
                    </div>
                </div>

                <div className="flex overflow-x-auto no-scrollbar w-full px-3 gap-3">
                    <SmallPlaylistCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./jug16x9.jpg"} videoCount={42} />
                    <SmallPlaylistCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./japan.jpg"} videoCount={42} />
                    <SmallPlaylistCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} videoCount={42} />
                    <SmallPlaylistCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} videoCount={42} />
                </div>
            </div>

        </main>
    )
}






