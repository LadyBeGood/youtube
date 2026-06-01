import { useState } from "react";
import SmallVideoCard from "../components/SmallVideoCard";
import { BackIcon, DownArrowIcon, NextIcon } from "../components/Icons";





export default function Profile() {
    return (
        <div className="py-4 w-full overflow-x-hidden space-y-8 no-scrollbar">
            <div className="w-full">
                <div className="flex justify-between px-3 pb-4">
                    <span className="font-medium text-xl">History</span>
                    <DownArrowIcon className="-rotate-90"/>
                </div>

                <div className="flex overflow-x-auto no-scrollbar w-full px-3 gap-3">
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./yellow.webp"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                    <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./japan.jpg"} duration={"9:38"} />
                </div>
            </div>

            <div>
                <div className="w-full">
                    <div className="flex justify-between px-3 pb-4">
                        <span className="font-medium text-xl">Watch Later</span>
                        <DownArrowIcon className="-rotate-90" />
                    </div>

                    <div className="flex overflow-x-auto no-scrollbar w-full px-3 gap-3">
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    </div>
                </div>
            </div>

            <div>
                <div className="w-full">
                    <div className="flex justify-between px-3 pb-4">
                        <span className="font-medium text-xl">Liked Videos</span>
                        <DownArrowIcon className="-rotate-90" />
                    </div>

                    <div className="flex overflow-x-auto no-scrollbar w-full px-3 gap-3">
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    </div>
                </div>
            </div>

            <div>
                <div className="w-full">
                    <div className="flex justify-between px-3 pb-4">
                        <span className="font-medium text-xl">Playlists</span>
                        <DownArrowIcon className="-rotate-90" />
                    </div>

                    <div className="flex overflow-x-auto no-scrollbar w-full px-3 gap-3">
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                        <SmallVideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} thumbnailURL={"./pink.webp"} duration={"9:38"} />
                    </div>
                </div>
            </div>
        </div>
    )
}






