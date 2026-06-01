import { useState } from "react";
import SmallVideoCard from "../components/SmallVideoCard";
import { AddIcon, BackIcon, DownArrowIcon, NextIcon } from "../components/Icons";
import SmallPlaylistCard from "../components/SmallPlaylistCard";





export default function Profile() {
    return (
        <div className="py-4 w-full overflow-x-hidden space-y-8 no-scrollbar">
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
                        <AddIcon size={28}/>
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

        </div>
    )
}






