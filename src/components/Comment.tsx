import { useState } from "react";
import { BackIcon, CommentIcon, DislikeIcon, DownArrowIcon, LikeIcon, MoreIcon, ReplyIcon } from "./Icons";

export default function Comment() {
    return (
        <div className="w-full max-w-2xl text-zinc-100 p-3">
            {/* Main Comment Wrapper */}
            <div className="flex gap-3">
                {/* Left Side: Avatar & Reddit-style Collapse Line */}
                <div className="flex flex-col items-center">
                    <div className="w-9 h-9 flex-shrink-0 cursor-pointer">
                        <img
                            className="rounded-full w-full h-full object-cover"
                            src="./avatar.webp"
                            alt="Profile picture"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-baseline gap-1.5 mb-1">
                        <span className="text-sm font-medium truncate text-white">
                            Michael Faraday
                        </span>
                        <span className="text-cool-gray">
                            ·
                        </span>
                        <span className="text-xs text-cool-gray flex-shrink-0">
                            2h ago
                        </span>
                        <button className="ml-auto p-1 hover:text-white rounded-full hover:bg-zinc-800 transition">
                            <MoreIcon size={18} />
                        </button>
                    </div>

                    {/* Comment Body */}
                    <div className="text-sm leading-relaxed mb-3 break-words">
                        The struggle was real when he was trying to hit the timer.
                        Honestly, one of the best moments in the entire video!
                    </div>

                    {/* Actions (YouTube layout style) */}
                    <div className="flex items-center gap-8 text-xs">
                        <button className="flex items-center gap-1.5 hover:text-white transition group">
                            <LikeIcon size={18} className="group-hover:scale-110 transition-transform" />
                            <span>2.1K</span>
                        </button>

                        <button className="flex items-center hover:text-white transition group">
                            <CommentIcon size={18} className="group-hover:scale-110 transition-transform mr-1" />
                            <span>12</span>
                            <DownArrowIcon size={22}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}